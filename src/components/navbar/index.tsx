"use client";

import { containerSize } from "@/config/theme";
import {
    ActionIcon,
    Box,
    Container,
    Flex,
    useComputedColorScheme,
    useMantineColorScheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import cx from "clsx";
import classes from "./navbar.module.css";

export default function Navbar() {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });

    return (
        <nav className={classes.nav}>
            <Container py={10} size={containerSize}>
                <Flex justify="space-between" align="center">
                    <header>
                        <h1
                            style={{
                                margin: 0,
                                fontWeight: "normal",
                                fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                            }}>
                            srijanmukherjee
                        </h1>
                    </header>
                    <Box>
                        <ActionIcon
                            onClick={() =>
                                setColorScheme(computedColorScheme === "light" ? "dark" : "light")
                            }
                            variant="default"
                            size="md"
                            aria-label="Toggle color scheme">
                            <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
                            <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
                        </ActionIcon>
                    </Box>
                </Flex>
            </Container>
        </nav>
    );
}
