"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { sendEmail } from "@/utils/send-email";
import { useForm } from "react-hook-form";
import { useState } from "react";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data: FormData) {
    setIsLoading(true); // Disable the submit button and show loading state
    try {
      await sendEmail(data); // Send email using the provided API
      reset(); // Clear form fields after successful submission
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false); // Re-enable the submit button
    }
  }

  return (
    <div className="md:mt-20 mt-10 max-w-7xl min-h-[76vh] px-10">
      <h2 className="text-3xl lg:text-6xl text-white text-center mb-10 lg:mb-20 tracking-tight font-extrabold mt-10">
        Contact <span className="text-purple">Me!</span>
      </h2>
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4 gap-8 mt-16 lg:mt-60">
        <div>
          <h3 className="font-bold mb-8 text-gray-100 tracking-wider text-2xl">
            LET&apos;S CONNECT
          </h3>
          <p className="text-gray-300 tracking-tight md:text-lg">
            I&apos;m currently looking for new opportunities. Feel free to reach
            out by email or using the contact form below.
          </p>
          <div
            className="text-left mt-6"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "200px",
            }}>
            <Link
              className="cursor-pointer"
              href="https://linkedin.com/in/rusu-emanuel-marius"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin
                size={30}
                color="#f5f5f5"
              />
            </Link>
            <Link
              href="https://github.com/Rusu91-webdeveloper"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub
                size={30}
                color="#f5f5f5"
              />
            </Link>
            <Link
              href="mailto:your.email@example.com"
              target="_blank"
              rel="noopener noreferrer">
              <FaEnvelope
                size={30}
                color="#f5f5f5"
              />
            </Link>
          </div>
        </div>
        <div className="bg-black flex flex-col rounded-2xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col p-6 text-[black] bg-gradient-to-r from-pink-800 to-violet-900 rounded-2xl">
            <label
              className="mb-2 text-white"
              htmlFor="name">
              Name
            </label>
            <input
              className="bg-slate-100 py-2 px-4 rounded-lg mb-4"
              type="text"
              placeholder="Your Name"
              required
              {...register("name", { required: true })}
            />
            <label
              className="mb-2 text-white"
              htmlFor="email">
              Email
            </label>
            <input
              className="bg-slate-100 py-2 px-4 rounded-lg mb-4"
              type="email"
              placeholder="Email"
              required
              {...register("email", { required: true })}
            />
            <label
              className="mb-2 text-white"
              htmlFor="message">
              Message
            </label>
            <textarea
              className="bg-slate-100 py-2 px-4 rounded-lg mb-4"
              placeholder="Enter your message"
              rows={4}
              required
              {...register("message", { required: true })}
            />
            <button
              type="submit"
              disabled={isLoading} // Disable when loading
              className={`mdLg:ml-6 cursor-pointer rounded-full bg-white text-black py-2 px-4 mdLg:py-3 mdLg:px-6 mdLg:text-lg font-bold transition duration-300 ease-in-out mt-4 mdLg:mt-6 ${
                isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-[#f0f0f0]"
              }`}>
              {isLoading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
