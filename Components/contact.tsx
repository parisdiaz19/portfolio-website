"use client";

import React from "react";
import HeaderComponent from "./header-component";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/context/hooks";
import { useState } from "react";
import { sendEmail } from "@/actions/sendEmail";
import { useFormStatus } from "react-dom";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const { pending } = useFormStatus();

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
    >
      <HeaderComponent HeaderText="Contact me"></HeaderComponent>
      <p className="text-gray-700 my-[-1.5rem] mb-5 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:parisdiaz719@gmail.com">
          parisdiaz719@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          alert("Email has been sent successfully!");
        }}
      >
        <input
          placeholder="Your Name"
          name="senderName"
          className="h-14 rounded-lg border-black p-4 my-3
           dark:bg-white dark:bg-opacity/80 dark:focus:bg-opacity-100 transition-all
           dark:outline-none"
          type="text"
          required
          maxLength={70}
        />
        <input
          placeholder="Your Email Address"
          name="senderEmail"
          className="h-14 rounded-lg border-black p-4
          dark:bg-white dark:bg-opacity/80 dark:focus:bg-opacity-100 transition-all
          dark:outline-none"
          type="email"
          required
          maxLength={200}
        />
        <textarea
          placeholder="Your Message"
          className="h-52 mb-4 my-3 py-4 rounded-lg borderBlack p-4
          dark:bg-white dark:bg-opacity/80 dark:focus:bg-opacity-100 transition-all
          dark:outline-none"
          name="senderMessage"
          required
          maxLength={500}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
