"use client";

import { Container, Stack, rem } from "@mantine/core";
import { containerSize } from "@/config/theme";

import Skills from "@/components/sections/skills";
import HeroSection from "@/components/sections/hero";
import BioSection from "@/components/sections/bio";
import AboutSection from "@/components/sections/about";
import FocusSection from "@/components/sections/focus";

export default function Home() {
    return (
        <Container pb={20} size={containerSize}>
            <HeroSection />

            <Stack gap={rem(50)}>
                {/* About section */}
                <AboutSection />

                {/* Bio/Timeline  */}
                <BioSection />

                {/* Focus */}
                <FocusSection />

                {/* Skills */}
                <Skills />
            </Stack>
        </Container>
    );
}
