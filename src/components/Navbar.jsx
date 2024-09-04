"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <ul className="flex gap-3  m-4">
        <Link href={"/"} className="cursor-pointer">
          Kurslar ro'yxati
        </Link>
        <Link href={"/panel"} className="cursor-pointer">
          Kurs qo'shish
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
