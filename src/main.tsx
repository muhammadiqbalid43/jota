import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AuthProvider from "./context/auth-context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import DashboardPage from "./routes/dashboard";
import RegisterPage from "./routes/register";
import LoginPage from "./routes/login";
import PrivateRoute from "./components/private-route";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute />,
    children: [
      {
        path: "",
        element: <DashboardPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
