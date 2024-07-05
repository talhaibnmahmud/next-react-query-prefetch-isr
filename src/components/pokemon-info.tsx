"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";

import { pokemonOptions } from "@/queries/pokemon";

export function PokemonInfo() {
    const { data, isLoading, isError, isFetching, isPending, isRefetching } =
        useSuspenseQuery(pokemonOptions);

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (isError) {
        return <h2>There was an error</h2>;
    }

    if (isFetching) {
        return <h2>Fetching...</h2>;
    }

    if (isPending) {
        return <h2>Pending...</h2>;
    }

    if (isRefetching) {
        return <h2>Refetching...</h2>;
    }

    return (
        <div>
            <figure>
                <Image src={data.sprites.front_shiny} height={96} width={96} alt={data.name} />
                <h2>I&apos;m {data.name}</h2>
            </figure>
        </div>
    );
}
