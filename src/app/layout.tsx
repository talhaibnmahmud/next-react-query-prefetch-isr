import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/globals.css";
import QueryProvider from "@/components/client/query-provider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Next.js Tanstack Query Example (with Prefetching)",
    description:
        "An example of using Tanstack Query with Next.js to prefetch data on the server with SSR, SSG, and ISR.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn("min-h-screen bg-background font-inter antialiased", inter.className)}
            >
                <QueryProvider>{children}</QueryProvider>
            </body>
        </html>
    );
}
