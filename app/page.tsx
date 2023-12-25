import { Services } from "@/Data";
import React from "react";
import Service from "./components/Service";

const About = () => {
  return (
    <div className="flex flex-grow flex-col px-6 pt-1">
      <h5 className="my-3 font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        deleniti libero odit quos eveniet, voluptates officiis enim similique
        illo vitae perferendis soluta eligendi provident nisi non, expedita, in
        obcaecati eos? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Nemo, nam explicabo nisi, non nostrum commodi repellat alias harum,
        autem cum vero et est recusandae nesciunt iure quae ipsum rerum dicta!
      </h5>
      <div
        className="dark:bg-dark-200 mt-5 flex-grow rounded-xl bg-gray-100 p-4"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I offers</h6>
        <div className="grid gap-2 lg:grid-cols-2 ">
          {Services.map((service) => (
            <div
              className="dark:bg-dark-700 rounded-lg bg-gray-300 lg:mx-2 lg:my-2"
              key={service.title}
            >
              <Service service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
