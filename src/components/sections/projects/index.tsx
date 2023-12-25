import ProjectCard from "@/components/project-card";
import { Grid, SimpleGrid, Title } from "@mantine/core";
import { IconLibrary } from "@tabler/icons-react";

export default function ProjectsSection() {
    return (
        <section>
            <Title order={2} mb="md" display="flex" style={{ alignItems: "center", gap: "10px" }}>
                <IconLibrary size={32} /> Projects
            </Title>

            <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <ProjectCard
                    title="Hiring Portal"
                    subheading="Fullstack"
                    coverImage="/img/projects/talentwars/cover.png"
                    description="A comprehensive hiring solution built during a freelancing gig. Allows candidates to be tested through video interviews, coding tests, figma design tests."
                />
                <ProjectCard
                    title="Chai - Compliance Chatbot"
                    subheading="AI/ML"
                    coverImage="/img/projects/chai/cover.png"
                    description="A complete end-to-end chat bot solution to answer compliance queries. The chat bot uses a neural network to classify an user query into a pre trained list of tags."
                    githubLink="https://github.com/srijanmukherjee/compliance-cell-chatbot"
                />
            </SimpleGrid>
        </section>
    );
}
