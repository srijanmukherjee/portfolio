"use client";

import { Anchor, Container, Flex, Group, Text } from "@mantine/core";
import { containerSize } from "@/config/theme";
import * as links from "@/data/links";

export default function Footer() {
    return (
        <Container size={containerSize} py="lg">
            <Flex justify="space-between">
                <Text>&copy; Srijan Mukherjee 2023</Text>
                <Group>
                    <Anchor href={links.github} c="dimmed">
                        Github
                    </Anchor>
                    <Anchor href={links.linkedin} c="dimmed">
                        Linkedin
                    </Anchor>
                    <Anchor href={links.twitter} c="dimmed">
                        Twitter
                    </Anchor>
                </Group>
            </Flex>
        </Container>
    );
}
