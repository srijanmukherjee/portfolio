"use client";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "@/config/theme";
import "@mantine/core/styles.css";
import "./global.css";
import Navbar from "@/components/navbar";
import { useEffect } from "react";
import Footer from "@/components/footer";

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
                <title>Srijan Mukherjee Portfolio</title>
                <meta
                    name="description"
                    content="Srijan Mukherjee is a passionate and dedicated software developer having a deep interest in crafting innovative solutions through code."
                />
                <meta name="og:image" content="https://www.srijanmukherjee.in/favicon.ico" />
                <meta name="og:title" content="Srijan Mukherjee Portfolio" />
                <meta name="og:description" content="Srijan Mukherjee's Portfolio Website" />
                <meta name="og:url" content="srijanmukherjee.in" />
                <ColorSchemeScript defaultColorScheme="auto" />
            </head>
            <body>
                <MantineProvider theme={theme} withCssVariables defaultColorScheme="dark">
                    <Navbar />
                    {children}
                    <Footer />
                </MantineProvider>
            </body>
        </html>
    );
}
