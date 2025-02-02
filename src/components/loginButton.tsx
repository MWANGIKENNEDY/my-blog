"use client";
import React from "react";
import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";

const LoginButton = ({
  open,
  setOpen,
}: {
  open?: boolean;
  setOpen?: (open: boolean) => void;
}) => {
  return (
    <SignedOut>
      <li onClick={() => setOpen && setOpen(!open)}>
        <Link href="/login">
          <button className="px-4 py-2 bg-blue-400 rounded-3xl">Login</button>
        </Link>
      </li>
    </SignedOut>
  );
};

export default LoginButton;
