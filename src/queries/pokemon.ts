import { queryOptions } from "@tanstack/react-query";

import { wait } from "@/utils/wait";

export const pokemonOptions = queryOptions({
    queryKey: ["pokemon"],
    queryFn: async () => {
        await wait(1000); // Simulate a slow network request

        const response = await fetch("https://pokeapi.co/api/v2/pokemon/25");
        return response.json();
    },
});
