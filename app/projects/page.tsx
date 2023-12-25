"use client";
import { Projects } from "@/Data";
import React, { useState } from "react";
import Project from "../components/Project";
import { Category, IProject } from "@/Type";
import ProjectNavBar from "../components/ProjectNavBar";

const page = () => {
  const [allProjects, setAllProjects] = useState<Array<IProject>>(Projects);
  const [showDetail, setShowDetail] = useState<number | null>(null);
  return (
    <div className="overflow-y-scroll px-5 py-2" style={{ height: "90vh" }}>
      <nav>
        <ProjectNavBar allProjects={Projects} setAllProjects={setAllProjects} />
      </nav>
      <div className="relative my-3 grid grid-cols-12 gap-4">
        {allProjects.map((proj) => (
          <div
            className="dark:bg-dark-700 col-span-12 rounded-xl bg-gray-100 p-2 pt-4 sm:col-span-6 lg:col-span-4"
            key={proj.id}
          >
            <Project
              proj={proj}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
