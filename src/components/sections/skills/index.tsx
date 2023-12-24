import { languages, technologies, databases } from "@/data/skills";
import { Box, Title, Stack, Group } from "@mantine/core";
import { IconBook } from "@tabler/icons-react";
import SkillCard from "@/components/skill-card";

export default function Skills() {
    return (
        <Box>
            <Title order={2} mb="md" display="flex" style={{ alignItems: "center", gap: "10px" }}>
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
    );
}
