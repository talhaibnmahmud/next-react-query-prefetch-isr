"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";

import { pokemonOptions } from "@/queries/pokemon";

export function PokemonInfo() {
    const { data, isLoading, isError, isFetching, isPending, isRefetching } =
        useSuspenseQuery(pokemonOptions);

    console.log({
        data,
        isLoading,
        isError,
        isFetching,
        isPending,
        isRefetching,
    });

    return (
        <div>
            <figure>
                <Image src={data.sprites.front_shiny} height={96} width={96} alt={data.name} />
                <h2>I&apos;m {data.name}</h2>
            </figure>
        </div>
    );
}
