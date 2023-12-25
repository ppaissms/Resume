"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FunctionComponent, useEffect, useState } from "react";

interface INavItems {
  activeItem: string;
  name: string;
  path: string;
  setActiveItem: Function;
}
const NavItem: FunctionComponent<INavItems> = ({
  setActiveItem,
  activeItem,
  name,
  path,
}) => {
  return (
    activeItem !== name && (
      <Link
        href={path}
        onClick={() => {
          setActiveItem(name);
        }}
      >
        <span className="hover:text-green-400">{name}</span>
      </Link>
    )
  );
};

const NavBar = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const pathName = usePathname();

  useEffect(() => {
    if (pathName === "/") {
      setActiveItem("About");
    }
    if (pathName === "/resume") {
      setActiveItem("Resume");
    }
    if (pathName === "/projects") {
      setActiveItem("Projects");
    }
  }, []);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="font-bold text-green-500 text-3xl border-b-4 border-green-500">
        {activeItem}
      </span>
      <div className="space-x-5 text-blue-500 font-medium text-xl px-2">
        <NavItem
          activeItem={activeItem}
          name="About"
          path="/"
          setActiveItem={setActiveItem}
        />
        <NavItem
          activeItem={activeItem}
          name="Resume"
          path="/resume"
          setActiveItem={setActiveItem}
        />
        <NavItem
          activeItem={activeItem}
          name="Projects"
          path="/projects"
          setActiveItem={setActiveItem}
        />
      </div>
    </div>
  );
};

export default NavBar;
