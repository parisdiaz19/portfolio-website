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
        As a dedicated Frontend Developer at{" "}
        <span className="font-medium">Scorpion</span>, I specialize in{" "}
        <span className="font-medium"> React.js</span>,
        <span className="font-medium"> Next.js</span>,
        <span className="font-medium"> TypeScript</span>, and
        <span className="font-medium"> SQL</span>, crafting and enhancing
        websites to deliver outstanding user experiences. Working alongside a
        skilled team of engineers, designers, and marketers, I've played a
        pivotal role in driving success for clients within the Franchise and
        Healthcare sectors. I'm passionate about collaboration, continually
        expanding my knowledge of emerging technologies, and tackling intricate
        challenges to achieve our collective objectives.
      </p>
      <p className="mb-3">
        When I'm not coding, I enjoy playing my violin, building plastic model
        kits, cooking up the next big meal in my kitchen, and lifting heavy
        weights at the gym. I enjoy learning new things and challenging myself.
      </p>
    </motion.section>
  );
}
