"use client";
import React, { useState } from "react";
import { FaBars, FaPlus } from "react-icons/fa";
import LoginButton from "./loginButton";
import Link from "next/link";

const Mobilenav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Fixed header */}

      <div className=" fixed h-16 w-full top-0 z-50 left-0 right-0 bg-gray-800">
        <div className="  flex h-full justify-between container mx-auto items-center p-4  text-white lg:hidden ">
          <Link href="/" className="font-bold text-white">
            Logo
          </Link>
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <FaPlus className=" transform rotate-[45deg]" />
            ) : (
              <FaBars />
            )}

            {/* Change Hamburger Icon */}
            {/* {open ? "X" : "☰"} */}
          </button>

          {/* Dropdown menu */}

          <div
            className={`absolute flex flex-col items-center justify-center top-16 w-full bg-gray-800 text-white h-screen  z-40 transition-all ease-in-out  ${
              open ? "-right-0" : "-right-[100%]"
            }`}
          >
            <ul className="space-y-4 p-4 flex flex-col items-center justify-center text-xl gap-10">
            <li onClick={() => setOpen(!open)}><Link href="/">Home</Link></li>
            <li onClick={() => setOpen(!open)}><Link href="/posts">Trending</Link></li>
            <li onClick={() => setOpen(!open)}><Link href="/write">Create Post</Link></li>
          

              <LoginButton open={open} setOpen={setOpen} />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobilenav;
