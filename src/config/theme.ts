import { MantineSize, createTheme } from "@mantine/core";
import localFont from "next/font/local";
// import { M_PLUS_1 } from "next/font/google";

const satoshi = localFont({
    src: "../assets/font/satoshi.ttf",
    fallback: ["Roboto", "sans-serif"],
});

// const mplus = M_PLUS_1({
//     subsets: ["latin"],
// });

export const theme = createTheme({
    fontFamily: satoshi.style.fontFamily,
});

export const containerSize: MantineSize = "md";
