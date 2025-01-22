"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs: React.FC = () => {
  // Define the type for the form reference
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Form reference is null.");
      return;
    }

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label htmlFor="user_name">Name</label>
      <input type="text" id="user_name" name="user_name" required />

      <label htmlFor="user_email">Email</label>
      <input type="email" id="user_email" name="user_email" required />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" required />

      <button type="submit">Send</button>
    </form>
  );
};
