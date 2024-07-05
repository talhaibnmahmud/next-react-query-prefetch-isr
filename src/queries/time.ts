import { queryOptions } from "@tanstack/react-query";

export const timeOptions = queryOptions({
    queryKey: ["time"],
    queryFn: async () => {
        const response = await fetch("https://worldtimeapi.org/api/ip");
        return response.json();
    },
});
