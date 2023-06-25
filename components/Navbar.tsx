"use client";

import { UserCircle } from "@phosphor-icons/react";
import Image from "next/image";
import { navbarlinks } from "../data";
import Link from "next/link";

//! Este es un comentario importante
//? Este es un comentario interesante
//* Este es un comentario interesante

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="">
      <nav className="container mx-auto max-w-screen-xl py-8">
        <div className="flex items-center px-5 md:px-5 justify-between">
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
            <div className="hidden md:flex md:gap-x-4">
              {navbarlinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="cursor-pointer text-sm font-normal capitalize text-white hover:text-purple-700"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <div>
              <UserCircle size={24} className="fill-white" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
