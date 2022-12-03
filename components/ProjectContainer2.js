import React from "react";
import Project from "./Project";

const ProjectContainer2 = () => {
  return (
    <div className="">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 md:justify-center">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectContainer2;
