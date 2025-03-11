import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pokemon/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  return <div>Pokemon {id}</div>;
}
