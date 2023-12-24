import { Box, Flex, Text, Group, Button } from "@mantine/core";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import Image from "next/image";

import * as links from "@/data/links";
import myself from "@/assets/img/me.jpg";

import classes from "./hero.module.css";
import { typewritterIntros } from "@/data/hero";

export default function HeroSection() {
    return (
        <Flex className={classes.hero}>
            <Flex direction="column" align="center">
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
                    <Typewriter words={typewritterIntros} loop typeSpeed={75} delaySpeed={4000} />
                    <span className={classes.ends}> ╱＞</span>
                </Text>
            </Flex>
            <Group wrap="wrap" justify="center">
                <Button variant="gradient" size="xl" my="xl">
                    Reach out
                </Button>
                <Button
                    variant="light"
                    size="xl"
                    component={Link}
                    href={links.resume}
                    target="_blank">
                    Resume
                </Button>
            </Group>
        </Flex>
    );
}
