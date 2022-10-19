import React from "react";
import { motion } from "framer-motion";

const Project = (props) => {
  return (
    <>
      <motion.div
        initial={{
          y: 200,
          opacity: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        class="p-4 md:w-[60%] md:h-[100%] lg:w-[30%]"
      >
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            class="lg:h-48 w-full object-cover object-center"
            src={props.image}
            alt="blog"
          />
          <div class="p-6 bg-white">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {props.tech}
            </h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
              {props.title}
            </h1>
            <p class="leading-relaxed mb-3">{props.description}</p>
            <div class="flex items-center flex-wrap">
              <div class="flex justify-center">
                <a href={props.wlink}>
                  <button class="inline-flex text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-purple-900 rounded text-lg">
                    Website
                  </button>
                </a>
                <a href={props.clink}>
                  <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Project;
