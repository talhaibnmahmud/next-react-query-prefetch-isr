"use client";

import { useQuery } from "@tanstack/react-query";

import { timeOptions } from "@/queries/time";

export function TimeInfo() {
    const { data, isLoading, isError, isFetching, isPending, isRefetching } = useQuery(timeOptions);

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
            <h2>It is currently {data.datetime}</h2>

            <div>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        </div>
    );
}
