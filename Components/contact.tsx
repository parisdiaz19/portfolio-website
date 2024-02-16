import React, { useState, ChangeEvent, FormEvent } from "react";
import HeaderComponent from "./header-component";

import { motion } from "framer-motion";
import { useSectionInView } from "@/context/hooks";

import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });


  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <motion.section
      id="contact"
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
      <HeaderComponent>Contact Me</HeaderComponent>
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
          await sendEmail(formData);
        }}
      >
        <input
          placeholder="Your Name"
          name="name"
          className="h-14 rounded-lg border-black p-4 my-3
           dark:bg-white dark:bg-opacity/80 dark:focus:bg-opacity-100 transition-all
           dark:outline-none"
          type="text"
          required
          maxLength={70}
          value={formData.name}
          onChange={handleChange}
        />
        <input
          placeholder="Your Email Address"
          name="email"
          className="h-14 rounded-lg border-black p-4
          dark:bg-white dark:bg-opacity/80 dark:focus:bg-opacity-100 transition-all
          dark:outline-none"
          type="email"
          required
          maxLength={200}
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          placeholder="Your Message"
          className="h-52 mb-4 my-3 py-4 rounded-lg borderBlack p-4
          dark:bg-white dark:bg-opacity/80 dark:focus:bg-opacity-100 transition-all
          dark:outline-none"
          name="message"
          required
          maxLength={500}
          value={formData.message}
          onChange={handleChange}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
