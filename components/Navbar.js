import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div>
      <div class="drop-shadow-lg list-none flex flex-col w-[60%] text-center rounded-2xl m-auto mt-10 bg-white p-0 sm:flex-row sm:justify-around sm:w-[60%] lg:w-[35%]">
        <Link href="/">
          <a>
            <li class="p-5 hover:cursor-pointer hover:text-purple-800 hover:underline underline-offset-8 decoration-2 font-semibold tracking-widest">
              All
            </li>
          </a>
        </Link>

        <hr />

        <Link href="/reactjs">
          <a>
            <li class="p-5 hover:cursor-pointer hover:text-purple-800 hover:underline underline-offset-8 decoration-2 font-semibold tracking-widest">
              React
            </li>
          </a>
        </Link>

        <hr />

        <Link href="/nextjs">
          <a>
            <li class="p-5 hover:cursor-pointer hover:text-purple-800 hover:underline underline-offset-8 decoration-2 font-semibold tracking-widest">
              Next Js
            </li>
          </a>
        </Link>

        <hr />

        <Link href="/normal">
          <a>
            <li class="p-5 hover:cursor-pointer hover:text-purple-800 hover:underline underline-offset-8 decoration-2 font-semibold tracking-widest">
              Normal
            </li>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
