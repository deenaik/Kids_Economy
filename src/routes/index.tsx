import { createFileRoute } from "@tanstack/react-router";
import { CoinTown } from "@/components/market/CoinTown";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <CoinTown />;
}
