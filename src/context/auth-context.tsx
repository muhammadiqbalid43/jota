import { auth } from "@/config/firebase";
import { User as FirebaseUser, onAuthStateChanged } from "firebase/auth";
import {
  register as firebaseRegister,
  login as firebaseLogin,
  loginWithGoogle as firebaseLoginWithGoogle,
  logout as firebaseLogout,
} from "@/services/auth-service";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  currentUser: FirebaseUser | null;
  loading: boolean;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Register with email/password
  const register = async (email: string, password: string) => {
    await firebaseRegister(email, password);
  };

  // Login with email/password
  const login = async (email: string, password: string) => {
    await firebaseLogin(email, password);
  };

  // Login with Google
  const loginWithGoogle = async () => {
    await firebaseLoginWithGoogle();
  };

  // Logout
  const logout = async () => {
    await firebaseLogout();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    register,
    login,
    loginWithGoogle,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
