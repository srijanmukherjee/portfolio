import { Badge, Button, Card, Group, Text, Image } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import { StaticImageData } from "next/image";
import Link from "next/link";

export interface ProjectCardProps {
    title: string;
    subheading?: string;
    description?: string;
    coverImage?: string | StaticImageData;
    tags?: string[];
    date?: string;
    githubLink?: string;
    link?: string;
}

export default function ProjectCard({
    title,
    subheading,
    description,
    coverImage,
    tags,
    date,
    githubLink,
    link,
}: ProjectCardProps) {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            {coverImage && (
                <Card.Section>
                    <Image src={coverImage} height={240} alt={title} />
                </Card.Section>
            )}

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{title}</Text>
                {subheading && <Badge color="pink">{subheading}</Badge>}
            </Group>

            {description && (
                <Text size="sm" c="dimmed">
                    {description}
                </Text>
            )}

            {githubLink && (
                <Button
                    component={Link}
                    color="blue"
                    fullWidth
                    mt="md"
                    radius="md"
                    href={githubLink}
                    target="_blank"
                    leftSection={<IconBrandGithub size={16} />}>
                    Github
                </Button>
            )}
        </Card>
    );
}
