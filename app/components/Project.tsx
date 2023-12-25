"use client";
import { IProject } from "@/Type";
import { Span } from "next/dist/trace";
import Image from "next/image";
import React, { FunctionComponent, useState } from "react";
import { AiFillProject } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

const Project: FunctionComponent<{
  proj: IProject;
  showDetail: number | null;
  setShowDetail: (id: number | null) => void;
}> = ({
  proj: {
    name,
    category,
    deployed_url,
    description,
    github_url,
    id,
    image_path,
    key_tech,
  },
  setShowDetail,
  showDetail,
}) => {
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        width={200}
        height={200}
        className="m-auto cursor-pointer"
        onClick={() => {
          setShowDetail(id);
        }}
        layout="responsive"
      />
      <p className="my-2 text-center">{name}</p>

      {/* //Pop Up grid */}
      {showDetail === id && (
        <div className="dark:bg-dark-200 absolute left-0 top-0 z-10 grid h-auto w-full gap-x-12 rounded-2xl bg-gray-200 p-4 md:p-10 md:grid-cols-2 ">
          {/* //Left side image */}
          <div>
            <Image
              src={image_path}
              alt={name}
              width={500}
              height={400}
              className=" rounded-lg"
            />
            <div className="my-4 flex justify-center space-x-3 text-green-400">
              <a
                href={github_url}
                className="dark:bg-dark-700 flex items-center space-x-3 rounded-xl bg-white px-4 py-2 text-lg"
              >
                <FaGithub className="h-8 w-8 cursor-pointer" />
                <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="dark:bg-dark-700 flex items-center space-x-3 rounded-xl bg-white px-4 py-2 text-lg"
              >
                <AiFillProject className="h-8 w-8 cursor-pointer" />
                <span>Project</span>
              </a>
            </div>
          </div>
          {/* //Right side info */}
          <div className="px-5 py-10">
            <h1 className="mb-3 text-xl font-medium md:text-2xl">{name}</h1>
            <h3 className="mb-3 font-medium">{description}</h3>
            <div className="mt-5 flex flex-wrap space-x-3 text-lg tracking-wider">
              {key_tech.map((t) => (
                <span
                  className="dark:bg-dark-700 my-1 rounded-xl bg-white px-2 py-1"
                  key={t}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          {/* //Close Button */}
          <button
            onClick={() => {
              setShowDetail(null);
            }}
            className="dark:bg-dark-700 absolute right-3 top-3 rounded-full bg-gray-400 p-1 focus:outline-none"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Project;
