import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import ProjectContainer3 from "../components/ProjectContainer3";

const nextjs = () => {
  return (
    <div>
      <Head>
        <title>NextJS Projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ProjectContainer3 />
    </div>
  );
};

export default nextjs;
