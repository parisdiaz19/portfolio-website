"use client";

import React from "react";
import HeaderComponent from "./header-component";
import { projectsData } from "@/app/data";
import Project from "./project";
import { useSectionInView } from "@/context/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-3">
      <HeaderComponent HeaderText="My Projects"></HeaderComponent>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
