"use client";

import { Box, Container, Flex, Text, rem } from "@mantine/core";
import { containerSize } from "@/config/theme";
import Image from "next/image";
import classes from "./page.module.css";

import myself from "@/assets/img/me-removebg.png";

export default function Home() {
    return (
        <main>
            <Container py={20} size={containerSize}>
                <Flex className={classes.hero}>
                    <Box>
                        <Text size="xl">Hey there</Text>
                        <Text size={rem(80)}>I&apos;m Srijan Mukherjee</Text>
                    </Box>
                    <Box p="lg">
                        <Image
                            src={myself}
                            alt="Srijan Mukherjee"
                            className={classes.img}
                            priority
                        />
                    </Box>
                </Flex>
            </Container>
        </main>
    );
}
