import { queryOptions } from "@tanstack/react-query";

import { wait } from "@/utils/wait";

export const timeOptions = queryOptions({
    queryKey: ["time"],
    queryFn: async () => {
        await wait(3_000); // Simulate a slow network requestl

        const response = await fetch("https://worldtimeapi.org/api/ip");
        return response.json();
    },
});
