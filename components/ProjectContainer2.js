import React from "react";
import Project from "./Project";

const ProjectContainer2 = () => {
  return (
    <div className="">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 md:justify-center">
            <Project
              tech="HTML, CSS, JavaScript"
              title="Rock Paper Scissors Game"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
              image="/images/rockpaper.png"
              wlink="https://ajrockpaperscissors.netlify.app/"
              clink="https://github.com/AtharvaJoshi12/Rock-Paper-Scissors-Game."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectContainer2;
