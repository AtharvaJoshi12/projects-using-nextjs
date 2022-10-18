import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";

function about() {
  return (
    <div>
      <Head>
        <title>About us</title>
      </Head>
      <Navbar />
      <h1>About Page</h1>
    </div>
  );
}

export default about;
