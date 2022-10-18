import React from "react";
import Project from "./Project";

const ProjectContainer3 = () => {
  return (
    <div className="">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 md:justify-center">
            <Project
              tech="Next JS, Tailwind-CSS"
              title="Hulu Clone"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
              image="/images/huluclone.png"
              wlink="https://hulu-clone-iota-black.vercel.app/"
              clink="https://github.com/AtharvaJoshi12/hulu-clone"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectContainer3;
