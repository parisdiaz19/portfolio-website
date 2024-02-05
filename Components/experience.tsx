"use client";

import React from "react";
import HeaderComponent from "./header-component";
import { experiencesData } from "@/app/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/context/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);
  const { theme } = useTheme();

  return (
    <section
      ref={ref}
      className="my-10 scroll-mt-28 mb-28 sm:mb-40"
      id="experience"
    >
      <HeaderComponent HeaderText="My Experience" />
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                visibility: "visible",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.04rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
                visibility: "visible",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "black",
                fontSize: "1.5rem",
                visibility: "visible",
              }}
            >
              <h3 className="font-semibold capitalize mb-2">{item.company}</h3>
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white">{item.description}</p>
              <ul className="mt-3">
                {item.responsibilities.map((responsibility, index) => (
                  <li className="!mt-1 font-normal list-disc" key={index}>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
