import { Box, Title, List } from "@mantine/core";
import { IconArrowRight, IconBadge, IconFocus2 } from "@tabler/icons-react";

export default function FocusSection() {
    return (
        <Box>
            <Title order={2} mb="md" display="flex" style={{ alignItems: "center", gap: "10px" }}>
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
    );
}
