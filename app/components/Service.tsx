import { IServices } from "@/Type";
import React, { FunctionComponent } from "react";

const Service: FunctionComponent<{ service: IServices }> = ({
  service: { Icon, about, title },
}) => {
  const createMarkUp = () => {
    return { __html: about };
  };
  return (
    <div className="flex items-center space-x-4 p-2">
      <Icon className="h-12 w-12 text-green-500" />
      <div>
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkUp()} />
      </div>
    </div>
  );
};

export default Service;
