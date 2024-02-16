import React from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {

  return (
    <button
      type="submit"
      className="group flex items-center justify-center 
    gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white 
    rounded-md outline-none transition-all focus:scale-110 
    hover:scale-110 active:scale-105 hover:bg-gray-950
    disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
    ></button>
  );
}
