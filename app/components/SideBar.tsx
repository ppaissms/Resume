"use client";
import React from "react";
import Image from "next/image";
import { FaDownload } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { useTheme } from "next-themes";

const SideBar = () => {
  const { theme, setTheme } = useTheme();
  const handleOnclickEmail = () => {
    window.open("mailto:pranavpatil1462@gmail.com");
  };

  const handleOnclickToggleTheme = () => {
    console.log("Theme", theme);

    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        src="/images/userAvatar.jpg"
        alt="userImage"
        width={200}
        height={200}
        className="m-auto rounded-full"
      />
      <h3 className="my-4 font-serif text-2xl font-medium tracking-wide text-blue-500">
        <span>Pranav</span> Patil
      </h3>
      <p className="dark:bg-dark-700 my-3 rounded-full bg-gray-200 px-2 py-1 text-xl">
        Full Stack Developer
      </p>
      <a
        // href="/assets/Pranav_Patil Resume.pdf"
        // download="Pranav_Patil Resume.pdf"
        href="/"
        className="dark:bg-dark-700 my-3 flex items-center justify-center gap-1 rounded-full bg-gray-200 px-2 py-1 text-xl"
      >
        <FaDownload className="h-6 w-6" /> Download Resume
      </a>

      {/* // social icons */}
      <div className="mx-auto flex w-9/12 justify-around text-green-500 md:w-full">
        <a>
          <FaGithub className="h-8 w-8 cursor-pointer" />
        </a>
        <a>
          <FaLinkedin className="h-8 w-8 cursor-pointer" />
        </a>
        <a>
          <FaInstagram className="h-8 w-8 cursor-pointer" />
        </a>
      </div>

      {/* // Address */}
      <div
        className="dark:bg-dark-200 my-3 justify-center bg-gray-200 px-2 py-4 text-lg"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex justify-center">
          <MdLocationPin className="h-6 w-6" />
          <span>Pune, Maharastra</span>
        </div>
        <p className="my-2">pranavpatil1462@gmail.com</p>
        <p className="my-2">7083854416 / 9511649236</p>
      </div>

      {/* //Email Buttons */}
      <button
        className="my-2 w-8/12 rounded-full bg-gradient-to-r from-green-400 to-blue-400 px-5 py-2 text-white focus:outline-none"
        onClick={handleOnclickEmail}
      >
        Email Me
      </button>
      {/* //Mode Buttons */}
      <button
        className="my-2 w-8/12 rounded-full bg-gradient-to-r from-green-400 to-blue-400 px-5 py-2 text-white focus:outline-none"
        onClick={handleOnclickToggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default SideBar;
