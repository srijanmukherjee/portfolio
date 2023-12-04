"use client";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "@/config/theme";
import "@mantine/core/styles.css";
import "./global.css";
import Navbar from "@/components/navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
