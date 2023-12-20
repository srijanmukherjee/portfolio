"use client";

import {
    Box,
    Button,
    Container,
    Flex,
    Group,
    Text,
    rem,
    useMantineColorScheme,
} from "@mantine/core";
import { containerSize } from "@/config/theme";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import classes from "./page.module.css";

import myself from "@/assets/img/me.jpg";

const typewritterIntros = [
    "Software Developer",
    "Computer Science Undergrad",
    "Hard working",
    "I do freelancing",
    "Check out my works below",
];
export default function Home() {
    return (
        <main style={{ height: "200vh" }}>
            <Container pb={20} size={containerSize}>
                <Flex className={classes.hero}>
                    <Flex className={classes.firstImpressionContainer}>
                        {/* Image */}
                        <Box className={classes.imgContainer}>
                            <Image src={myself} alt="Picture of Srijan Mukherjee" priority />
                        </Box>

                        {/* Name */}
                        <Text className={classes.name}>Srijan Mukherjee</Text>
                    </Flex>
                    <Text className={classes.introTypewriter}>
                        <span className={classes.ends}>＜</span>{" "}
                        <Typewriter
                            words={typewritterIntros}
                            loop
                            typeSpeed={75}
                            delaySpeed={4000}
                        />
                        <span className={classes.ends}> ╱＞</span>
                    </Text>
                    <Group>
                        <Button variant="gradient" size="xl" my="xl">
                            Reach out
                        </Button>
                        <Button variant="light" size="xl">
                            Resume
                        </Button>
                    </Group>
                </Flex>
            </Container>
        </main>
    );
}
