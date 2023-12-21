"use client";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "@/config/theme";
import "@mantine/core/styles.css";
import "./global.css";
import Navbar from "@/components/navbar";
import { useEffect } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    // useEffect(() => {
    //     const scrollHandler = (_: Event) => {
    //         const totalScrollHeight = document.body.scrollHeight - document.body.clientHeight;
    //         const percentage = (window.scrollY * 100) / totalScrollHeight;
    //         document.body.style.setProperty("--content-progress", `${percentage}%`);
    //     };

    //     window.addEventListener("scroll", scrollHandler);

    //     return () => {
    //         window.removeEventListener("scroll", scrollHandler);
    //     };
    // }, []);

    return (
        <html lang="en">
            <head>
                <title>Srijan Mukherjee</title>
                <ColorSchemeScript defaultColorScheme="auto" />
            </head>
            <body>
                <MantineProvider theme={theme} withCssVariables defaultColorScheme="dark">
                    <Navbar />
                    {children}
                </MantineProvider>
            </body>
        </html>
    );
}
