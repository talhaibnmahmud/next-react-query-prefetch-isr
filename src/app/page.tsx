import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { Hello } from "@/components/hello";
import { PokemonInfo } from "@/components/pokemon-info";
import { TimeInfo } from "@/components/time-info";
import { getQueryClient } from "@/lib/get-query-client";
import { helloOptions } from "@/queries/hello";
import { pokemonOptions } from "@/queries/pokemon";

export default function Home() {
    const queryClient = getQueryClient();

    void queryClient.prefetchQuery(pokemonOptions);
    void queryClient.prefetchQuery(helloOptions);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <HydrationBoundary state={dehydrate(queryClient)}>
                <PokemonInfo />
                <TimeInfo />
                <Hello />
            </HydrationBoundary>
        </main>
    );
}
