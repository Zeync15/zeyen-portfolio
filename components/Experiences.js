import React from "react";
import ExperienceItem from "./ExperienceItem";

const Experiences = () => {
  return (
    <div>
      <div id="experiences" className="w-full md:h-screen p-2 flex items-center py-16">
        <div className="max-w-[1240px] m-auto ">
          <div>
            <p className="uppercase text-xl tracking-widest text-[#5651e5]">Working Experience</p>

            <h2 className="py-4">What I have done</h2>
          </div>

          <ExperienceItem />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
