import { queryOptions } from "@tanstack/react-query";

export const helloOptions = queryOptions({
    queryKey: ["hello"],
    queryFn: async () => {
        const response = await fetch("http://localhost:8080/api/hello", {
            next: { revalidate: 30, tags: ["hello"] },
        });

        const data = await response.json();
        console.log(data);
        return data;
    },
});
