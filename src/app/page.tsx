"use client";

import {
    Box,
    Button,
    Container,
    Flex,
    Group,
    List,
    ListItem,
    Text,
    Timeline,
    Title,
    rem,
} from "@mantine/core";
import { containerSize } from "@/config/theme";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import classes from "./page.module.css";

import myself from "@/assets/img/me.jpg";
import links from "@/data/links.json";
import {
    IconBabyBottle,
    IconBrandUpwork,
    IconDeviceLaptop,
    IconFlower,
    IconFocus,
    IconFocus2,
    IconGitBranch,
    IconGitCommit,
    IconGitPullRequest,
    IconMessageDots,
    IconSchool,
    IconSchoolOff,
    IconTree,
} from "@tabler/icons-react";

const typewritterIntros = [
    "Software Developer",
    "Computer Science Undergrad",
    "I am also a freelancer",
    "Check out my works below",
];
export default function Home() {
    return (
        <Container pb={20} size={containerSize}>
            {/* Impact zone */}
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
                        <Typewriter
                            words={typewritterIntros}
                            loop
                            typeSpeed={75}
                            delaySpeed={4000}
                        />
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

            {/* About section */}
            <section>
                <Title
                    order={2}
                    mb="md"
                    display="flex"
                    style={{ alignItems: "center", gap: "10px" }}>
                    <IconFlower size={32} /> About
                </Title>
                <Text size="lg" ta="justify">
                    <Text span fw="bold">
                        Srijan Mukherjee
                    </Text>{" "}
                    is a passionate and dedicated software developer currently pursuing his
                    undergraduate degree in Computer Science at KIIT University. He&apos;s in the
                    pre-final year of his program and have a deep interest in crafting innovative
                    solutions through code.
                </Text>
            </section>

            {/* Bio/Timeline  */}
            <Box my="xl">
                <Title
                    order={2}
                    mb="md"
                    display="flex"
                    style={{ alignItems: "center", gap: "10px" }}>
                    <IconTree size={32} /> Bio
                </Title>

                <Timeline reverseActive active={3} bulletSize={32} lineWidth={2}>
                    <Timeline.Item
                        bullet={<IconDeviceLaptop size={18} />}
                        title="Computer Science and Engineering Degree">
                        <Text c="dimmed" size="sm">
                            Kalinga Institute of Industrial Technology, Bhubaneshwar
                        </Text>
                        <Text size="xs" mt={4}>
                            2021 - Present
                        </Text>
                    </Timeline.Item>

                    <Timeline.Item
                        bullet={<IconBrandUpwork size={18} />}
                        title="Started freelancing">
                        <Text c="dimmed" size="sm">
                            Upwork (current), Fiverr, Truelancer
                        </Text>
                        <Text size="xs" mt={4}>
                            2021 - Present
                        </Text>
                    </Timeline.Item>

                    <Timeline.Item
                        title="Senior Secondary"
                        bullet={<IconSchool size={18} />}
                        lineVariant="dashed">
                        <Text c="dimmed" size="sm">
                            D.A.V. Public School, Asansol
                        </Text>
                        <Text size="xs" mt={4}>
                            2021
                        </Text>
                    </Timeline.Item>

                    <Timeline.Item title="Arrival on Earth" bullet={<IconBabyBottle size={18} />}>
                        <Text c="dimmed" size="sm"></Text>
                        <Text size="xs" mt={4}>
                            2004
                        </Text>
                    </Timeline.Item>
                </Timeline>
            </Box>

            {/* Focus */}
            {/* <Box>
                <Title
                    order={2}
                    mb="md"
                    display="flex"
                    style={{ alignItems: "center", gap: "10px" }}>
                    <IconFocus2 size={32} /> Currently
                </Title>
            </Box> */}
        </Container>
    );
}
