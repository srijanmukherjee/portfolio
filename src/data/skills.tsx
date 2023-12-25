import { SkillCardProps } from "@/components/skill-card";
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
import firebaseIcon from "@/assets/img/technologies/firebase.png";

export const languages: SkillCardProps[] = [
    {
        value: "C",
        color: "blue",
        img: cIcon,
        alt: "C Programming Language",
    },
    {
        value: "C++",
        color: "blue",
        img: cppIcon,
        alt: "C++ Programming Language",
    },
    {
        value: "Java",
        color: "white",
        img: javaIcon,
        alt: "Java Programming Language",
    },
    {
        value: "Python",
        color: "blue",
        img: pythonIcon,
        alt: "Python Programming Language",
    },
    {
        value: "Javascript",
        color: "yellow",
        img: javascriptIcon,
        alt: "Javascript Programming Language",
    },
    {
        value: "Typescript",
        color: "blue",
        img: typescriptIcon,
        alt: "Typescript Programming Language",
    },
];

export const technologies: SkillCardProps[] = [
    {
        value: "NextJS",
        color: "#fff",
        img: nextjsIcon,
        alt: "Nextjs",
    },
    {
        value: "React",
        color: "blue",
        img: reactIcon,
        alt: "React",
    },
    {
        value: "NodeJS",
        color: "green",
        img: nodejsIcon,
        alt: "Node.JS",
    },
    {
        value: "Spring Framework",
        color: "blue",
        img: springIcon,
        alt: "Spring",
    },
    {
        value: "Spring Boot",
        color: "blue",
        img: springIcon,
        alt: "Spring Boot",
    },
    {
        value: "Firebase",
        color: "yellow",
        img: firebaseIcon,
        alt: "Firebase",
    },
];

export const databases: SkillCardProps[] = [
    {
        value: "PostgreSQL",
        color: "blue",
        img: postgresqlIcon,
        alt: "Nextjs",
    },
    {
        value: "MongoDB",
        color: "green",
        img: mongodbIcon,
        alt: "MongoDB",
    },
];
