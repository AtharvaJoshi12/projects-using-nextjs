import React from "react";
import Project from "./Project";

const ProjectContainer1 = () => {
  return (
    <div className="">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 md:justify-center">
            {/* <Project
              tech="HTML, CSS, JavaScript, NodeJS"
              title="ChattHub - Chat App"
              description="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
              image="/images/chatthub.png"
              wlink="https://chatthub.herokuapp.com/"
              clink="https://github.com/AtharvaJoshi12/Realtime-Chat-Appilcation"
            /> */}
            <Project
              tech="Next JS, Tailwind-CSS"
              title="Airbnb Clone"
              description=""
              image="/images/airbnb.png"
              wlink="https://airbnbclone-lac.vercel.app/"
              clink="https://github.com/AtharvaJoshi12/airbnbclone"
            />
            <Project
              tech="Next JS, Tailwind-CSS"
              title="Hulu Clone"
              description=""
              image="/images/huluclone.png"
              wlink="https://hulu-clone-iota-black.vercel.app/"
              clink="https://github.com/AtharvaJoshi12/hulu-clone"
            />
            <Project
              tech="React JS, Local Storage"
              title="To Do List"
              description=""
              image="/images/todo.png"
              wlink="https://todo-bay-three.vercel.app/"
              clink="https://github.com/AtharvaJoshi12/todo-react"
            />{" "}
            <Project
              tech="React JS"
              title="Google Clone"
              description=""
              image="/images/google.png"
              wlink="https://googleclone-blush-gamma.vercel.app/"
              clink="https://github.com/AtharvaJoshi12/googleclone/"
            />{" "}
            <Project
              tech="React JS"
              title="YouTube Clone"
              description=""
              image="/images/youtube.png"
              wlink="https://youtubeclone-eight.vercel.app/"
              clink="https://github.com/AtharvaJoshi12/youtubeclone"
            />
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

export default ProjectContainer1;
