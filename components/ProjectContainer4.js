import React from "react";
import Project from "./Project";

const ProjectContainer4 = () => {
  return (
    <div className="">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 md:justify-center">
            {/* <Project
              tech="HTML, CSS, JavaScript, NodeJS"
              title="ChattHub - Chat App"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
              image="/images/chatthub.png"
              wlink="https://chatthub.herokuapp.com/"
              clink="https://github.com/AtharvaJoshi12/Realtime-Chat-Appilcation"
            /> */}
            <Project
              tech="HTML, CSS, JavaScript"
              title="Drumkit"
              description=""
              image="/images/band.png"
              wlink="https://atharvajoshi12.github.io/drumkit/"
              clink="https://github.com/AtharvaJoshi12/drumkit"
            />

            <Project
              tech="HTML, CSS, JavaScript"
              title="Rock Paper Scissors Game"
              description=""
              image="/images/rockpaper.png"
              wlink="https://ajrockpaperscissors.netlify.app/"
              clink="https://github.com/AtharvaJoshi12/Rock-Paper-Scissors-Game."
            />

            <Project
              tech="HTML, CSS, JavaScript"
              title="Scientific Calculator"
              description=""
              image="/images/calci.png"
              wlink="https://atharvajoshi12.github.io/Scientific-Calculator-/"
              clink="https://github.com/AtharvaJoshi12/Scientific-Calculator-"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectContainer4;
