import { Title, Text } from "@mantine/core";
import { IconFlower } from "@tabler/icons-react";

export default function AboutSection() {
    return (
        <section>
            <Title order={2} mb="md" display="flex" style={{ alignItems: "center", gap: "10px" }}>
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
    );
}
