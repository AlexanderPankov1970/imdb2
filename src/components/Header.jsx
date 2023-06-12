import React from "react";
import { ImHome } from "react-icons/im";
import { BsFillInfoCircleFill } from "react-icons/bs";
import MenuItem from "./MenuItem";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex sm:mx-auto justify-between items-center">
      <div className="flex">
        <MenuItem title="Home" address="/" Icon={ImHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="mr-8">
        <Link href="/" className="">
          <h2 className="mr-8 mt-4">
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
