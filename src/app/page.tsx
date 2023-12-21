"use client";

import {
    Alert,
    Box,
    Button,
    Container,
    Flex,
    Group,
    List,
    Stack,
    Text,
    ThemeIcon,
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
import cIcon from "@/assets/img/languages/c.png";
import cppIcon from "@/assets/img/languages/cpp.png";
import javaIcon from "@/assets/img/languages/java.png";
import pythonIcon from "@/assets/img/languages/python.png";
import javascriptIcon from "@/assets/img/languages/javascript.png";
import typescriptIcon from "@/assets/img/languages/typescript.png";
import nextjsIcon from "@/assets/img/technologies/nextjs.png";
import reactIcon from "@/assets/img/technologies/react.png";
import nodejsIcon from "@/assets/img/technologies/nodejs.png";
import springIcon from "@/assets/img/technologies/spring.png";
import postgresqlIcon from "@/assets/img/technologies/postgresql.png";
import mongodbIcon from "@/assets/img/technologies/mongodb.png";
import links from "@/data/links.json";
import {
    IconArrowRight,
    IconBabyBottle,
    IconBadge,
    IconBook,
    IconBrandUpwork,
    IconDeviceLaptop,
    IconFlower,
    IconFocus2,
    IconSchool,
    IconTree,
} from "@tabler/icons-react";
import SkillCard, { SkillCardProps } from "@/components/skill-card";

const typewritterIntros = [
    "Software Developer",
    "Computer Science Undergrad",
    "I am also a freelancer",
    "Check out my works below",
];

const languages: SkillCardProps[] = [
    {
        value: "C",
        color: "blue",
        src: cIcon,
        alt: "C Programming Language",
    },
    {
        value: "C++",
        color: "blue",
        src: cppIcon,
        alt: "C++ Programming Language",
    },
    {
        value: "Java",
        color: "white",
        src: javaIcon,
        alt: "Java Programming Language",
    },
    {
        value: "Python",
        color: "blue",
        src: pythonIcon,
        alt: "Python Programming Language",
    },
    {
        value: "Javascript",
        color: "yellow",
        src: javascriptIcon,
        alt: "Javascript Programming Language",
    },
    {
        value: "Typescript",
        color: "blue",
        src: typescriptIcon,
        alt: "Typescript Programming Language",
    },
];

const technologies: SkillCardProps[] = [
    {
        value: "NextJS",
        color: "#fff",
        src: nextjsIcon,
        alt: "Nextjs",
    },
    {
        value: "React",
        color: "blue",
        src: reactIcon,
        alt: "React",
    },
    {
        value: "NodeJS",
        color: "green",
        src: nodejsIcon,
        alt: "Node.JS",
    },
    {
        value: "Spring Framework",
        color: "blue",
        src: springIcon,
        alt: "Spring",
    },
    {
        value: "Spring Boot",
        color: "blue",
        src: springIcon,
        alt: "Spring Boot",
    },
];

const databases: SkillCardProps[] = [
    {
        value: "PostgreSQL",
        color: "blue",
        src: postgresqlIcon,
        alt: "Nextjs",
    },
    {
        value: "MongoDB",
        color: "green",
        src: mongodbIcon,
        alt: "MongoDB",
    },
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

            <Stack gap={rem(50)}>
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
                        undergraduate degree in Computer Science at KIIT University. He&apos;s in
                        the pre-final year of his program and have a deep interest in crafting
                        innovative solutions through code.
                    </Text>
                </section>

                {/* Bio/Timeline  */}
                <Box>
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

                        <Timeline.Item
                            title="Arrival on Earth"
                            bullet={<IconBabyBottle size={18} />}>
                            <Text c="dimmed" size="sm"></Text>
                            <Text size="xs" mt={4}>
                                2004
                            </Text>
                        </Timeline.Item>
                    </Timeline>
                </Box>

                {/* Focus */}
                <Box>
                    <Title
                        order={2}
                        mb="md"
                        display="flex"
                        style={{ alignItems: "center", gap: "10px" }}>
                        <IconFocus2 size={32} /> Currently
                    </Title>
                    <List size="xl" center withPadding icon={<IconArrowRight size={24} />}>
                        <List.Item>Exploring various software development domains</List.Item>
                        <List ml="md" icon={<IconBadge size={18} />} center spacing="sm" my="xs">
                            <List.Item>AI/ML</List.Item>
                            <List.Item>Fullstack development</List.Item>
                        </List>
                        <List.Item>Improving DevOps skills</List.Item>
                    </List>
                </Box>

                {/* Skills */}
                <Box>
                    <Title
                        order={2}
                        mb="md"
                        display="flex"
                        style={{ alignItems: "center", gap: "10px" }}>
                        <IconBook size={32} /> Skills
                    </Title>

                    <Stack gap="xl">
                        <Stack gap="xs">
                            <Title order={3} c="dimmed">
                                Languages
                            </Title>
                            <Group>
                                {languages.map((props) => (
                                    <SkillCard {...props} key={props.value} />
                                ))}
                            </Group>
                        </Stack>

                        <Stack gap="xs">
                            <Title order={3} c="dimmed">
                                Technologies
                            </Title>
                            <Group>
                                {technologies.map((props) => (
                                    <SkillCard {...props} key={props.value} />
                                ))}
                            </Group>
                        </Stack>

                        <Stack gap="xs">
                            <Title order={3} c="dimmed">
                                Databases
                            </Title>
                            <Group>
                                {databases.map((props) => (
                                    <SkillCard {...props} key={props.value} />
                                ))}
                            </Group>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    );
}
