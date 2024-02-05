"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import React from "react";
import { useSectionInView } from "@/context/hooks";

export default function Mainstage({ ProfilePicture }) {
  const { ref } = useSectionInView("Home", 0.5);
  return (
    <section ref={ref} id="home" className="my-[5.5rem] scroll-mt-[100rem]">
      <div className="flex items-center justify-center mx-auto mb-[3rem]">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.4,
            }}
          >
            <Image
              src={ProfilePicture}
              alt="Paris Diaz Headshot"
              width="200"
              height="200"
              quality="95"
              priority={true}
              className="h-[12rem] w-[12rem] rounded-full 
            border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      <motion.p
        className="text-center mx-auto mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl 
       "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Paris! </span>
        I'm a <span className="font-bold">Software Engineer</span>. I enjoy
        building
        <span className="italic"> sites & apps</span>.
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 
          rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
          transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1" />
        </Link>
        <a
          href="/CV.pdf"
          download
          className="group bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full
          outline-none focus:scale-110 hover:scale-110 active:scale-105
          transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/parisdiaz/"
          target="_blank"
          className="group bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full
        outline-none focus:scale-110 hover:scale-110 active:scale-105
        transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin className="opacity-70" />
        </a>
        <a
          className="group bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full
        outline-none focus:scale-110 hover:scale-110 active:scale-105
        transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare className="opacity-70" />
        </a>
      </motion.div>
    </section>
  );
}
