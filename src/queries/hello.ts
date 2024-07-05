import { queryOptions } from "@tanstack/react-query";

import { wait } from "@/utils/wait";

export const helloOptions = queryOptions({
    queryKey: ["hello"],
    queryFn: async () => {
        await wait(1000); // Simulate a slow network request

        const response = await fetch("http://localhost:3000/api/hello", {
            next: { revalidate: 30, tags: ["hello"] },
        });
        return response.json();
    },
});
