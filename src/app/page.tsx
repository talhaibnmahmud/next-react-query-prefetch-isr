import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { PokemonInfo } from "@/components/pokemon-info";
import { getQueryClient } from "@/lib/get-query-client";
import { pokemonOptions } from "@/queries/pokemon";

export default function Home() {
    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(pokemonOptions);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <HydrationBoundary state={dehydrate(queryClient)}>
                <PokemonInfo />
            </HydrationBoundary>
        </main>
    );
}
