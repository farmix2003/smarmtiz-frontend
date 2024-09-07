"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <ul className="flex gap-3  m-4">
        <Link
          href={"/"}
          className="cursor-pointer border-b-2 border-white hover:border-red-400 transition-all"
        >
          Kurslar ro'yxati
        </Link>
        <Link
          href={"/panel"}
          className="cursor-pointer border-b-2 border-white hover:border-red-400 transition-all active:border-red-400"
        >
          Kurs qo'shish
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
