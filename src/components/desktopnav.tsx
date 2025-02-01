import React from "react";


import LoginButton from "./loginButton";
import Link from "next/link";

const Desktop = () => {
  return (

    <div className=" fixed w-full top-0 z-50 h-16  bg-gray-800 hidden lg:flex ">


<div className=" container h-full  text-white flex justify-between items-center ">
<Link href="/" className="font-bold text-white">Logo</Link>
      <div className="">
        <ul className=" flex gap-10 items-center text-sm ">
       

            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Trending</Link></li>
            <li><Link href="/">Most Popular</Link></li>
            <li><Link href="/">About</Link></li>

          <LoginButton />
        </ul>
      </div>
    </div>
    </div>

  );
};

export default Desktop;
