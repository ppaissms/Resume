import { ISkillProgress } from "@/Type";
import React, { FunctionComponent } from "react";

const Bar: FunctionComponent<{ data: ISkillProgress }> = ({
  data: { Icon, level, name },
}) => {
  return (
    <div className="my-2 rounded-full bg-gray-300 text-white dark:bg-gray-300">
      <div
        className="flex items-center rounded-full bg-gradient-to-r from-green-400 to-blue-400 px-4 py-1"
        style={{ width: level }}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
};

export default Bar;
