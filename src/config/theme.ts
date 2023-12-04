import { MantineSize, MantineTheme, createTheme } from "@mantine/core";
import localFont from "next/font/local";

const satoshi = localFont({
    src: "../assets/font/satoshi.ttf",
    fallback: ["Roboto", "sans-serif"],
});

export const theme = createTheme({
    fontFamily: satoshi.style.fontFamily,
});

export const containerSize: MantineSize = "md";
