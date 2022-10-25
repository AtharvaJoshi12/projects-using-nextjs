import React from "react";
import Project from "./Project";

const ProjectContainer1 = () => {
  return (
    <div className="">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 md:justify-center">
            <Project
              tech="Next JS, Tailwind-CSS"
              title="Airbnb Clone"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
              image="/images/airbnb.png"
              wlink="https://airbnbclone-lac.vercel.app/"
              clink="https://github.com/AtharvaJoshi12/airbnbclone"
            />
            <Project
              tech="Next JS, Tailwind-CSS"
              title="Hulu Clone"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
              image="/images/huluclone.png"
              wlink="https://hulu-clone-iota-black.vercel.app/"
              clink="https://github.com/AtharvaJoshi12/hulu-clone"
            />

            <Project
              tech="HTML, CSS, JavaScript"
              title="Drumkit"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
              image="/images/band.png"
              wlink="https://atharvajoshi12.github.io/drumkit/"
              clink="https://github.com/AtharvaJoshi12/drumkit"
            />

            <Project
              tech="HTML, CSS, JavaScript"
              title="Rock Paper Scissors Game"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
              image="/images/rockpaper.png"
              wlink="https://ajrockpaperscissors.netlify.app/"
              clink="https://github.com/AtharvaJoshi12/Rock-Paper-Scissors-Game."
            />

            <Project
              tech="HTML, CSS, JavaScript"
              title="Scientific Calculator"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
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

export default ProjectContainer1;
