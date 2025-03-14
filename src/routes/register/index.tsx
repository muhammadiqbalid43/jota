import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/auth-context";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/register/")({
  component: RegisterComponent,
});

export default function RegisterComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { register, loginWithGoogle } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await register(email, password);
    } catch (err: any) {
      setError(err.message || "Failed to create an account");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setError("");
      setLoading(true);
      await loginWithGoogle();
    } catch (err: any) {
      setError(err.message || "Failed to sign in with Google");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-10 space-y-8 bg-white shadow-md rounded-xl">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            Create your account
          </h2>
        </div>

        {error && (
          <div className="px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <Label htmlFor="email-address">Email address</Label>
              <Input />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
