import React from "react";
import { ImHome } from "react-icons/im";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { LuSmile } from "react-icons/lu";
import MenuItem from "./MenuItem";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex sm:mx-auto justify-between items-center mb-5">
      <div className="flex">
        <MenuItem title="Home" address="/" Icon={ImHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
        <MenuItem title="My Page" address="/my_page" Icon={LuSmile} />
      </div>
      <div className="flex mr-8 items-center mt-4 space-x-5">
        <DarkModeSwitch />
        <Link href="/" className="">
          <h2 className="mr-8 ">
            <span className="font-bold mr-2 bg-amber-500 py-1 px-1 rounded-lg">
              IMDB
            </span>
            <span className="hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
