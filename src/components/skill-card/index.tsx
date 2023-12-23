import { Flex, MantineColor, ThemeIcon, rem } from "@mantine/core";
import { StaticImageData } from "next/image";
import Image from "next/image";

import classes from "./skillcard.module.css";

export interface SkillCardProps {
    img: string | StaticImageData;
    alt: string;
    value: string;
    color?: MantineColor;
}

export default function SkillCard({ img, value, color = "white", alt }: SkillCardProps) {
    return (
        <Flex className={classes.container}>
            <ThemeIcon size="xl" radius="md" color={color} variant="light">
                <Image src={img} alt={alt} width={28} />
            </ThemeIcon>
            {value}
        </Flex>
    );
}
