"use client";

import React, { useEffect } from "react";
import HeaderComponent from "./header-component";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/context/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  return (
    <motion.section
      ref={ref}
      className="mx-auto mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 border-black/5  dark:bg-none rounded-md p-5"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <HeaderComponent>About Me</HeaderComponent>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Music Education</span>, I decided to
        pursue my passion for programming. During the COVID-19 lockdown, I
        taught myself <span className="font-medium">Web Development</span> using
        resources from YouTube and Discord Communities. I love how programming
        allows you to apply your problem solving skills in real-time. This field
        of work allows me to always be on my toes and helps with my day-to-day
        life when I have to make quick decisions. My core stack is{" "}
        <span className="font-medium">React</span>,{" "}
        <span className="font-medium">Next.js</span>,{" "}
        <span className="font-medium">Node.js</span>, and{" "}
        <span className="font-medium">MongoDB</span>.
      </p>
      <p className="mb-3">
        When I'm not coding, I enjoy playing my violin, building plastic model
        kits, cooking up the next big meal in my kitchen, and lifting heavy
        weights at the gym. I enjoy learning new things and challenging myself.
      </p>
    </motion.section>
  );
}
