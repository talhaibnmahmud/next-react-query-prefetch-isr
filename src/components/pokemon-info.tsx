"use client";

import { pokemonOptions } from "@/queries/pokemon";
import { useSuspenseQuery } from "@tanstack/react-query";

export function PokemonInfo() {
    const { data } = useSuspenseQuery(pokemonOptions);

    return (
        <div>
            <figure>
                <img src={data.sprites.front_shiny} height={200} alt={data.name} />
                <h2>I&apos;m {data.name}</h2>
            </figure>
        </div>
    );
}
