"use client";

import React, { useState, useEffect, useRef } from "react";
import { UserCircle, List, X } from "@phosphor-icons/react";
import Image from "next/image";
import { navbarlinks } from "../data";
import Link from "next/link";

//! Este es un comentario importante
//? Este es un comentario interesante
//* Este es un comentario interesante

type Props = {};

const Navbar = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  let menuRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as HTMLElement)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousemove", handler);
    return () => {
      document.removeEventListener("mousemove", handler);
    };
  }, []);

  return (
    <header className="relative">
      <nav className="container mx-auto max-w-screen-xl py-8">
        <div className="flex items-center justify-between px-5 md:px-5">
          <div className="inline-block">
            <Image
              src="/img/roads-logo.png"
              width={120}
              height={120}
              className="w-24 object-contain"
              alt="logo"
            />
          </div>
          <div className="flex gap-x-10">
            <div
              ref={menuRef}
              className={`${
                menuOpen
                  ? "fixed w-[95%] left-2 top-20 flex flex-col z-[1] gap-y-12 rounded-2xl bg-gray-900 px-32 pb-20 pt-20 md:hidden"
                  : "hidden md:flex md:gap-x-4"
              }`}
            >
              {navbarlinks.map((link) => (
                <Link
                  onClick={() => setMenuOpen(false)}
                  key={link.title}
                  href={link.url}
                  className="cursor-pointer text-sm font-normal capitalize text-indigo-300 md:text-white hover:text-purple-700"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <div
              className={`${
                menuOpen &&
                "fixed right-0 top-0 z-0 h-screen w-screen bg-gray-500 bg-opacity-25 backdrop-blur-sm md:hidden"
              }`}
            ></div>
            <div>
              <UserCircle size={24} className="fill-white" />
            </div>
            <div>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="fixed right-5 top-9 z-10 rounded-full bg-gray-900 px-2 py-2 text-indigo-300 md:hidden"
              >
                {menuOpen ? <X size={18} /> : <List size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
