"use client";

import { footerlinks } from "@/data";
import {
  InstagramLogo,
  MetaLogo,
  TwitchLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

type Props = {};
const year = new Date().getFullYear();
const Footer = (props: Props) => {
  return (
    <footer id="contact" className="bg-indigo-900 py-20">
      <div className="container mx-auto grid max-w-screen-xl grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col gap-y-10">
          <div>
            <Image
              src="/img/roads-logo-b.png"
              width={120}
              height={120}
              alt="footer-logo"
            />
          </div>
          <div className="text-sm font-semibold text-indigo-200">
            <p>18530 Greenfelder Trail</p>
            <p>514.663.1470</p>
            <p>Veum Inc</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col gap-y-5">
            {footerlinks.map((link) => (
              <div key={link.title}>
                <h4 className="font-semibold capitalize text-indigo-100">
                  {link.title}
                </h4>
                <div className="flex flex-col gap-y-2 text-sm capitalize text-indigo-200">
                  {link.links.map((item) => (
                    <Link key={item.title} href={item.url}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-end gap-y-10">
          <div className="flex gap-x-5">
            <div>
              <InstagramLogo size={32} className="fill-indigo-100" />
            </div>
            <div>
              <TwitchLogo size={32} className="fill-indigo-100" />
            </div>
            <div>
              <TwitterLogo size={32} className="fill-indigo-100" />
            </div>
            <div>
              <MetaLogo size={32} className="fill-indigo-100" />
            </div>
          </div>
          <div>
            <p className="text-sm font-light text-white">
              All rights reserved &copy; {year}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
