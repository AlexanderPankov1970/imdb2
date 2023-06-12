import Link from "next/link";
import React from "react";

export default function MenuItem({ title, address, Icon }) {
  return (
    <div className="">
      <Link href={address} className="flex mx-4 lg:mx-8 hover:text-green-400 ">
        <Icon className="text-2xl sm:hidden mx-1  my-2" />
        <p className="hidden sm:inline my-2 text-xl font-bold">{title}</p>
      </Link>
    </div>
  );
}
