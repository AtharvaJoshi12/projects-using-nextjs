import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

function Navbar() {
  const router = useRouter();
  return (
    <div>
      <motion.div
        initial={{
          y: 0,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        class="drop-shadow-lg list-none flex flex-col w-[60%] text-center rounded-2xl m-auto mt-10 bg-white p-0 sm:flex-row sm:justify-around sm:w-[60%] lg:w-[35%]"
      >
        <Link href="/">
          <a className={router.pathname == "/" ? "active" : ""}>
            <li class="p-5 hover:cursor-pointer hover:text-purple-800 hover:underline underline-offset-8 decoration-2 font-semibold tracking-widest">
              All
            </li>
          </a>
        </Link>

        <hr />

        <Link href="/reactjs">
          <a className={router.pathname == "/reactjs" ? "active" : ""}>
            <li class="p-5 hover:cursor-pointer hover:text-purple-800 hover:underline underline-offset-8 decoration-2 font-semibold tracking-widest">
              React
            </li>
          </a>
        </Link>

        <hr />

        <Link href="/nextjs">
          <a className={router.pathname == "/nextjs" ? "active" : ""}>
            <li class="p-5 hover:cursor-pointer hover:text-purple-800 hover:underline underline-offset-8 decoration-2 font-semibold tracking-widest">
              Next Js
            </li>
          </a>
        </Link>

        <hr />

        <Link href="/normal">
          <a className={router.pathname == "/normal" ? "active" : ""}>
            <li class="p-5 hover:cursor-pointer hover:text-purple-800 hover:underline underline-offset-8 decoration-2 font-semibold tracking-widest">
              Normal
            </li>
          </a>
        </Link>
      </motion.div>
    </div>
  );
}

export default Navbar;
