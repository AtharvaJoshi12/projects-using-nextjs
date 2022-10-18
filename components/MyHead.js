import React from "react";
import Image from "next/image";

const MyHead = () => {
  return (
    <div>
      <img
        class="h-52 mt-10 rounded-full m-auto drop-shadow-lg"
        src="../images/myimage.jpg"
        alt="My Image"
      />
      <h1 class="text-center font-semibold tracking-widest text-2xl mt-5">
        Hi I am Atharva Joshi
      </h1>
    </div>
  );
};

export default MyHead;
