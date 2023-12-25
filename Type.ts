import { IconType } from "react-icons";

export interface IServices {
  title: string;
  about: string;
  Icon: IconType;
}

export interface ISkillProgress {
  name: string;
  level: string;
  Icon: IconType;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_tech: string[];
}

export type Category = "React" | ".NET" | "SQL Server" | "Nextjs 14";
