import { Github } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-zinc-900">
      <div className="container bg-zinc-900 text-gray-200 w-full flex flex-col items-center justify-center gap-2 py-5">
        <hr className="border-zinc-700 w-full " />
        <div className="w-full flex justify-between items-center">
          <p>
            @2025 <span className="text-gray-400">--- </span>he
            <span className="text-gray-400">/</span>him
          </p>
          <a href="https://github.com/Kuntalmajee2557" target="_blank">
            <p className="cursor-pointer flex justify-center items-center gap-1 border-zinc-700 underline underline-offset-2 decoration-2 decoration-gray-700">
              <Github size={16} className="cursor-pointer" />
              kuntal.dev
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
