import phaseImg from "@/public/phase.png";
import breakoutImg from "@/public/breakout.png";
import tekken from "@/public/tekken.png";
import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
] as const;

export const experiences = [
  {
    name: "Scorpion",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "C#",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "TailwindCSS",
  "Redux",
  "MongoDB",
  "SQL/MySQL",
] as const;

export const specialSkillsData = [
  "Violinist",
  "Pianist",
  "Music Teacher",
  "Powerlifter",
  "Coffee Addict",
  "Extreme Gamer",
  "Plastic Model Addict",
] as const;

export const projectsData = [
  {
    title: "Phase Music Player",
    description:
      "This is a web browser music player that features a list of free songs that can be selected and played. It has features like filtering, sorting and dragging to skip to certain parts of each song.",
    tags: ["React", "MaterializeCSS", "Redux", "Router"],
    imageUrl: phaseImg,
    link: "https://parisdiaz19.github.io/phase-music-player/",
  },
  {
    title: "Breakout Game",
    description:
      "Breakout paddle game created in the browser. Features the use of animations and HTML Canvas.",
    tags: ["HTML", "CSS", "CSS Animation", "JavaScript", "HTML Canvas"],
    imageUrl: breakoutImg,
    link: "https://parisdiaz19.github.io/paddleGame/",
  },
  {
    title: "Tekken 8 Resource Library",
    description:
      "This is a project I made for my friends and I. We are huge fans of the Tekken franchise and I built this website to hold all data related to characters and how to use them.",
    tags: ["React", "Next.js", "TailwindCSS", "Router", "Redux"],
    imageUrl: tekken,
    link: "https://tekken8-resource-library.vercel.app",
  },
] as const;

export const experiencesData = [
  {
    company: "Scorpion Internet Marketing",
    title: "Software Engineer",
    location: "Valencia, CA (Remote)",
    description:
      "I currently work as a Software Engineer. My responsibilities include: Maintaining/Updating client websites, communicate with Designers and Creative Managers on matters of website concept, design, and structure.",
    responsibilities: [
      "Continuously maintain the website(s); test, troubleshoot, and resolve problems",
      "Communicate with Designers and Creative Managers on matters of website concept, design, and structure",
      "Responsible for ensuring all requests are being addressed with importance, urgency and professional communication",
      "Communicate with Director of Technical Quality or System Engineers for system level improvements to enhance the client experience and team efficiency ",
      "Responsible for providing assistance to web developers by being a resource for questions, coaching and assisting with training",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "January 2021 - Present",
  },
  {
    company: "Purpose White",
    title: "Shopify Developer",
    location: "Fort Lee, NJ (Remote)",
    description: "Built and maintained e-commerce website for shopify.",
    responsibilities: [
      "Designed company website using HTML, CSS, JavaScript and Shopify Liquid",
      "Discussed product and prototypes with CEO, CFO, and CMO",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "January 2020 - December 2020",
  },
  {
    company: "Swish Gadgets",
    title: "Front-End Developer",
    location: "Fort Lee, NJ (Remote)",
    description: "Built and maintained e-commerce website for shopify.",
    responsibilities: [
      "Designed company website using HTML, CSS, JavaScript and Shopify Liquid",
      "Discussed product and prototypes with CEO, CFO, and CMO",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "January 2019 - December 2020",
  },

  {
    company: "Montclair State University",
    title: "Graduated w/ Bachelor of Arts - BA, Music Teacher Education",
    location: "Montclair, NJ",
    description:
      "I graduated from Montclair with a degree in Music Education with a focus in Violin Studies. I have a licesnse to teach in public schools for the state of New Jersey.",
    responsibilities: [
      "Dean's List (3.8 GPA)",
      "Performed at various venues including Carnegie Hall (NYC)",
      "Was a member of the MSU Symphony Orchestra (2014-2019)",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
] as const;
