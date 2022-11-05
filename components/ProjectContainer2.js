import React from "react";
import Project from "./Project";

const ProjectContainer2 = () => {
  return (
    <div className="">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 md:justify-center">
            <Project
              tech="React JS"
              title="Amazon Clone"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
              image="/images/amazon.png"
              wlink="https://amazon-clone-murex-seven.vercel.app/"
              clink="https://github.com/AtharvaJoshi12/amazon-clone/"
            />{" "}
            <Project
              tech="React JS"
              title="Google Clone"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
              image="/images/google.png"
              wlink="https://googleclone-blush-gamma.vercel.app/"
              clink="https://github.com/AtharvaJoshi12/googleclone/"
            />{" "}
            <Project
              tech="React JS"
              title="YouTube Clone"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
              image="/images/youtube.png"
              wlink="https://youtubeclone-eight.vercel.app/"
              clink="https://github.com/AtharvaJoshi12/youtubeclone"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectContainer2;
