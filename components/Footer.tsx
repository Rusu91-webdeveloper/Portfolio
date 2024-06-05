"use client";

import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <footer className="text-slate-300  gap-y-6 gap-x-12 border-t border-gray-400 py-12 text-center mt-10 ">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2024 RusuEmanuel.net Build with Next.js and Tailwind CSS.
        Deployed with Vercel.
      </Typography>
    </footer>
  );
};

export default Footer;
