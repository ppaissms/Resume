"use client";
import { Category, IProject } from "@/Type";
import React, { FunctionComponent, useState } from "react";

interface IProjectNavbar {
  allProjects: IProject[];
  setAllProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
}

const ProjectNavBar: FunctionComponent<IProjectNavbar> = ({
  allProjects,
  setAllProjects,
}) => {
  const [activeState, setActiveState] = useState<Category | string>("all");
  function handleOnClick(arg: Category | "all") {
    debugger;
    let filteredData: IProject[];
    if (arg === "all") {
      filteredData = allProjects;
      setActiveState("all");
    } else {
      filteredData = allProjects.filter((proj) => proj.category.includes(arg));
      setActiveState(arg);
    }

    setAllProjects(filteredData);
  }

  return (
    <div className="dark:bg-dark-700 flex gap-4 space-x-3 overflow-x-auto rounded-lg bg-gray-100 px-3 py-2">
      <a
        onClick={() => {
          handleOnClick("all");
        }}
        className={`${
          activeState === "all"
            ? "underline decoration-green-400 underline-offset-8 "
            : " "
        } cursor-pointer text-lg font-medium hover:text-green-400`}
      >
        All
      </a>
      <a
        onClick={() => {
          handleOnClick("React");
        }}
        className={`${
          activeState === "React"
            ? "underline decoration-green-400 underline-offset-8 "
            : " "
        } cursor-pointer text-lg font-medium hover:text-green-400`}
      >
        React
      </a>
      <a
        onClick={() => {
          handleOnClick(".NET");
        }}
        className={`${
          activeState === ".NET"
            ? "underline decoration-green-400 underline-offset-8 "
            : " "
        }cursor-pointer text-lg font-medium hover:text-green-400`}
      >
        .Net
      </a>
      <a
        onClick={() => {
          handleOnClick("Nextjs 14");
        }}
        className={`${
          activeState === "Nextjs 14"
            ? "underline decoration-green-400 underline-offset-8 "
            : " "
        }cursor-pointer text-lg font-medium hover:text-green-400`}
      >
        NextJs
      </a>
      <a
        onClick={() => {
          handleOnClick("SQL Server");
        }}
        className={`${
          activeState === "SQL Server"
            ? "underline decoration-green-400 underline-offset-8 "
            : " "
        }cursor-pointer text-lg font-medium hover:text-green-400`}
      >
        SQL Server
      </a>
    </div>
  );
};

export default ProjectNavBar;
