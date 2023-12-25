import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa6";
import { AiOutlineApi } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { IServices, ISkillProgress, IProject } from "./Type";

export const Services: Array<IServices> = [
  {
    title: "FrontEnd Developer",
    about:
      "I can build a beautiful and scalable SPA and MPA using <b>HTML </b>,<b>CSS </b>,<b>React </b>and <b>NEXTjs</b>",
    Icon: RiComputerLine,
  },
  {
    title: "BackEnd Delevoper",
    about:
      "Handle database, server, api using <b>.NET </b> and other popular frameworks",
    Icon: FaServer,
  },
  {
    title: "API Delevoper",
    about: "I can develope robust REST API",
    Icon: AiOutlineApi,
  },
  {
    title: "FrontEnd Developer",
    about:
      "I can build a beautiful and scalable SPA and MPA using <b>HTML </b>,<b>CSS </b>,<b>React </b>and <b>NEXTjs</b>",
    Icon: RiComputerLine,
  },
  {
    title: "FrontEnd Developer",
    about:
      "I can build a beautiful and scalable SPA and MPA using <b>HTML </b>,<b>CSS </b>,<b>React </b>and <b>NEXTjs</b>",
    Icon: RiComputerLine,
  },
  {
    title: "FrontEnd Developer",
    about:
      "I can build a beautiful and scalable SPA and MPA using <b>HTML </b>,<b>CSS </b>,<b>React </b>and <b>NEXTjs</b>",
    Icon: RiComputerLine,
  },
  {
    title: "FrontEnd Developer",
    about:
      "I can build a beautiful and scalable SPA and MPA using <b>HTML </b>,<b>CSS </b>,<b>React </b>and <b>NEXTjs</b>",
    Icon: RiComputerLine,
  },
];

export const Languages: Array<ISkillProgress> = [
  {
    name: "Java Script",
    level: "90%",
    Icon: BsCircleFill,
  },
  {
    name: "React",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "NEXTjs",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Bootstrap",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "TailwindCSS",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: ".NET",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "SQL Server",
    level: "70%",
    Icon: BsCircleFill,
  },
  {
    name: "Azure Devops",
    level: "70%",
    Icon: BsCircleFill,
  },
];

export const Tools: Array<ISkillProgress> = [
  {
    name: "Figma",
    level: "40%",
    Icon: BsCircleFill,
  },
  {
    name: "VSCode",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "Visual Studio Code",
    level: "80%",
    Icon: BsCircleFill,
  },
  {
    name: "SSMS",
    level: "70%",
    Icon: BsCircleFill,
  },
];

export const Projects: Array<IProject> = [
  {
    id: 1,
    name: "Covid Tracker",
    description: "This app show statistics view of corona virus all over India",
    image_path: "/images/covid.png",
    github_url: "",
    category: ["React"],
    deployed_url: "",
    key_tech: ["React", "Tailwind"],
  },
  {
    id: 2,
    name: "Project_2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet atque omnis ipsam minus, necessitatibus quidem dolore eveniet, at officiis incidunt neque laboriosam in perferendis reiciendis, obcaecati hic velit nulla vel.",
    image_path: "/images/covid.png",
    github_url: "",
    category: ["SQL Server", "React"],
    deployed_url: "",
    key_tech: ["React", "Java Script"],
  },
  {
    id: 3,
    name: "Project_3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet atque omnis ipsam minus, necessitatibus quidem dolore eveniet, at officiis incidunt neque laboriosam in perferendis reiciendis, obcaecati hic velit nulla vel.",
    image_path: "/images/covid.png",
    github_url: "",
    category: ["SQL Server"],
    deployed_url: "",
    key_tech: ["React"],
  },
  {
    id: 4,
    name: "Project_4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet atque omnis ipsam minus, necessitatibus quidem dolore eveniet, at officiis incidunt neque laboriosam in perferendis reiciendis, obcaecati hic velit nulla vel.",
    image_path: "/images/covid.png",
    github_url: "",
    category: ["Nextjs 14"],
    deployed_url: "",
    key_tech: ["Java Script"],
  },
  {
    id: 5,
    name: "Project_5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet atque omnis ipsam minus, necessitatibus quidem dolore eveniet, at officiis incidunt neque laboriosam in perferendis reiciendis, obcaecati hic velit nulla vel.",
    image_path: "/images/covid.png",
    github_url: "",
    category: ["React"],
    deployed_url: "",
    key_tech: ["Tailwind"],
  },
  {
    id: 6,
    name: "Project_6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet atque omnis ipsam minus, necessitatibus quidem dolore eveniet, at officiis incidunt neque laboriosam in perferendis reiciendis, obcaecati hic velit nulla vel.",
    image_path: "/images/covid.png",
    github_url: "",
    category: ["Nextjs 14"],
    deployed_url: "",
    key_tech: ["React", "Tailwind", "Java Script"],
  },
  {
    id: 7,
    name: "Project_7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet atque omnis ipsam minus, necessitatibus quidem dolore eveniet, at officiis incidunt neque laboriosam in perferendis reiciendis, obcaecati hic velit nulla vel.",
    image_path: "/images/covid.png",
    github_url: "",
    category: [".NET", "React", "SQL Server", "Nextjs 14"],
    deployed_url: "",
    key_tech: ["React", "Tailwind", "Java Script"],
  },
];
