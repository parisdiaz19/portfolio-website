"use client";
import React from "react";
import { skillsData } from "@/app/data";
import { specialSkillsData } from "@/app/data";
import HeaderComponent from "./header-component";
import { motion } from "framer-motion";
import { useSectionInView } from "@/context/hooks";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05,
    },
  },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);
  return (
    <section ref={ref} id="skills" className="mx-auto mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <HeaderComponent HeaderText="My Skills" />
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/[0.1] 
            rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            animate="animate"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
      <div className="my-10">
        <HeaderComponent HeaderText="My Special Skills" />
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {specialSkillsData.map((skill, index) => (
            <motion.li
              className="bg-white border border-black/[0.1] 
            rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              animate="animate"
              whileInView="animate"
              viewport={{
                once: true,
              }}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
