import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  // const api = import.meta.env.VITE_FIREBASE_API_KEY;
  // console.log("API URL:", api);
  return <div>Hello "/"!</div>;
}
