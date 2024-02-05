"use server";

import React from "react";
import { Resend } from "resend";
import { validateString } from "./utils";
import { getErrorMessage } from "./utils";
import  ContactFormEmail  from "@/email/contact-form-email";
import Contact from "@/Components/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  "use server";

  const senderName = formData.get("senderName");
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("senderMessage");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid Sender Email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid sender Message",
    };
  }
  if (!validateString(senderName, 50)) {
    return {
      error: "Invalid Sender Name",
    };
  }
  let data;
  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.com>",
      to: "parisdiaz719@gmail.com",
      subject: "New Portfolio Contact Form Submitted",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
        senderName: senderName as string
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
