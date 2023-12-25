import { Languages, Tools } from "@/Data";
import React from "react";
import Bar from "../components/Bar";

const resume = () => {
  return (
    <div className="px-3 py-2">
      {/* //Education */}
      <div className="dark:bg-dark-700 m-1 grid gap-6 rounded-lg bg-gray-100 p-2 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">PG-DAC</h5>
            <p className="font-semibold">SunBeam Institute(2022-2023)</p>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              atque omnis ipsam minus, necessitatibus quidem dolore eveniet, at
              officiis incidunt neque laboriosam in perferendis reiciendis,
              obcaecati hic velit nulla vel. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Pariatur aspernatur velit alias
              nihil dolorem, natus aut illo vitae sequi nisi veniam incidunt
              nemo earum cumque aperiam, dolores modi dicta unde?
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Associate Product Software Engineer
            </h5>
            <p className="font-semibold">Wolters Kluwer(2023 - on)</p>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              atque omnis ipsam minus, necessitatibus quidem dolore eveniet, at
              officiis incidunt neque laboriosam in perferendis reiciendis,
              obcaecati hic velit nulla vel.
            </p>
          </div>
        </div>
      </div>

      {/* //Languages */}
      <div className="dark:bg-dark-700 m-1 grid gap-6 rounded-lg bg-gray-100 p-2 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages and Frameworks</h5>
          <div>
            {Languages.map((lang) => (
              <Bar data={lang} key={lang.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div>
            {Tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
