"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast"


export const ContactUs: React.FC = () => {
  const toast=useToast();
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
        "service_55pn9hk", // Replace with your EmailJS service ID
        "template_ugdvar7", // Replace with your EmailJS template ID
        form.current,
        "LS5mCNeFJfWpWjZT7" // Replace with your EmailJS public key
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
      form.current.reset();
      toast.toast({
        title: "Success",
        description: "thanks for sending form.",
        duration: 4000, // Optional
        variant: "destructive",
        className:"bg-blue-200" // Optional: "default", "success", or "error"
      });
  };

  return (
    <div className="flex flex-col  p-4 justify-center items-center bg-black  outline-none">
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full max-w-md bg-neutral-800 p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-semibold text-white mb-6 text-center">
        Contact Us
      </h2>
      <div className="mb-4">
        <label htmlFor="user_name" className="block text-sm font-medium text-neutral-300 mb-2">
          Name
        </label>
        <input
          type="text"
          id="user_name"
          name="from_name"
          required
          className="w-full p-3 rounded-md bg-neutral-900 text-white border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="user_email" className="block text-sm font-medium text-neutral-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="user_email"
          name="from_email"
          required
          className="w-full p-3 rounded-md bg-neutral-900 text-white border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="w-full p-3 h-32 rounded-md bg-neutral-900 text-white border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-500 transition duration-200"
        
      >
        Send
      </button>
    </form>
</div>

    
  );
};
