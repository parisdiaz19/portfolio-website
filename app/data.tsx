import phaseImg from "@/public/phase.png";
import breakoutImg from "@/public/breakout.png";
import tekken from "@/public/tekken.png";
import carbonApp from "@/public/carbon-app.png";
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
    name: "Projects",
    hash: "#projects",
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
    title: "Carbon App",
    description:
      "This is an application created using Next.js and hosted on Vercel. It displays information from the Official Carbon Intensity API for Great Britain. Some features incluse a live chart displaying overall Carbon Intensity per region, user sorting/filtering, and a dynamic side panel that fetches live Carbon Intensity data.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "React Graph"],
    imageUrl: carbonApp,
    link: "https://carbon-app-topaz.vercel.app",
  },
] as const;

export const experiencesData = [
  {
    company: "Scorpion Internet Marketing",
    title: "Frontend Engineer",
    location: "Valencia, CA (Remote)",
    date: "January 2021 - Present",
    responsibilities: [
      "Spearhead the development of responsive, functional, and visually appealing websites using modern technologies such as React.js and Next.js.",
      "Lead initiatives to optimize website performance, implementing lazy loading, jQuery removal, JavaScript minification, and stylesheet optimization.",
      "Achieved a notable 45 percent reduction in page load times, reflected in improved Google PageSpeed scores.",
      "Implement enhancements for our proprietary CMS and client websites, introducing modern frontend technologies, refining user interfaces, and optimizing workflows.",
      "Ensure seamless user experiences across multiple browsers (Chrome, Firefox, Safari, Edge) by meticulously testing and integrating cross-browser compatibility solutions.",
      "Responsible for ensuring all requests and edits are being addressed with focus, importance, urgency and professional communication.",
      "Take an active role in mentoring new developers, providing comprehensive guidance on our frontend technologies and best practices.",
      "Lead close collaboration with the Integrations team to guarantee the seamless integration of frontend components with various backend services.",
      "Communicate with Designers and Marketing Managers on matters of website concept, design, and structure to ensure the best results and performance for our clients.",
    ],
    icon: React.createElement(CgWorkAlt),
  },
  {
    company: "Purpose White",
    title: "Frontend Developer",
    location: "Fort Lee, NJ (Remote)",
    responsibilities: [
      "Implemented efficient front-end development using React.js and Responsive Web Design, leading to a 25 percent enhancement in overall website performance and responsiveness.",
      "Integrated and optimized e-commerce functionalities, such as product pages, shopping carts, and checkout processes, to streamline the buying experience.",
      "Implemented mobile-first responsive design principles to guarantee a consistent and visually appealing experience across different devices and screen sizes.",
      "Engaged in regular discussions with the CEO to understand product details, aligning the front-end development strategy with business goals to enhance customer engagement and drive sales.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "January 2020 - December 2020",
  },
  {
    company: "Swish Gadgets",
    title: "Web Developer",
    location: "Fort Lee, NJ (Remote)",
    responsibilities: [
      "Spearheaded the migration of the company website to Shopify, resulting in a remarkable over 50 percent increase in sales and providing an enhanced user experience. Developed and optimized frontend components to align with Shopify’s platform, contributing to the overall success of the migration project.",
      "Implemented and customized Shopify themes to create a visually appealing and cohesive online store for Swish Gadgets.",
      "Integrated and optimized e-commerce features on the Shopify platform, including secure checkout processes, payment gateways, and inventory management, ensuring a seamless online shopping experience.",
      "Implemented SEO best practices to optimize product pages and improve the website’s visibility on search engines, driving organic traffic and enhancing discoverability.",
      "Collaborated with the marketing team to align web development strategies with promotional campaigns, maximizing the impact of marketing efforts on the online store.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "January 2019 - December 2020",
  },
] as const;
