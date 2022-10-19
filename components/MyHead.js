import React from "react";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const MyHead = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I am Atharva Joshi",
      "<GuyWhoLovesToCode />",
      "These Are My Projects",
      "Using React",
      "Using Next-Js",
      "Using HTML,CSS,JavaScript",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <motion.img
        class="h-52 mt-10 rounded-full m-auto drop-shadow-lg"
        src="../images/myimage.jpg"
        alt="My Image"
        initial={{
          y: -200,
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
      />
      <h1 class="text-center font-semibold tracking-widest text-2xl mt-5">
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
};

export default MyHead;
