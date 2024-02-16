"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
import Header from "@/Components/Header";
import Intro from "@/Components/mainstage";
import Projects from "@/Components/projects";
import Headshot from "@/public/headshot.jpg";

import SectionDivider from "@/Components/section-divider";
import About from "@/Components/about";
import Skills from "@/Components/skills";
import Experience from "@/Components/experience";
import Contact from "@/Components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Header />
      <Intro>test</Intro>
      <SectionDivider />
      <About />
      <Projects />
      <Experience />
      <Skills />
    </main>
  );
}
