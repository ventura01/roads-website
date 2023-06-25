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
import CustomButton from "./CustomButton";

type Props = {};
const year = new Date().getFullYear();
const Footer = (props: Props) => {
  return (
    <footer id="contact" className="bg-indigo-900 py-20">
      <div className="container  mx-auto grid max-w-screen-xl grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col gap-y-10 row-start-3 row-end-4 items-center md:row-start-1 md:row-end-2 md:items-start">
          <div>
            <Image
              src="/img/roads-logo-w.png"
              width={120}
              height={120}
              alt="footer-logo"
            />
          </div>
          <div className="text-sm font-semibold text-indigo-200 text-center md:text-start">
            <p>18530 Greenfelder Trail</p>
            <p>514.663.1470</p>
            <p>Veum Inc</p>
            <p>Norway</p>
          </div>
        </div>
        <div className="flex justify-center mb-10 md:mb-0">
          <div className="flex flex-col gap-y-5 text-center md:text-left">
            {footerlinks.map((link) => (
              <div key={link.title}>
                <h4 className="font-semibold capitalize text-indigo-100">
                  {link.title}
                </h4>
                <div className="flex flex-col gap-y-2 text-sm text-center md:text-left capitalize text-indigo-200">
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
        <div className="flex flex-col justify-between md:items-end gap-y-5 mb-10 md:mb-0 items-center">
          <div>
            <p className="text-white text-center md:text-right mb-3">Subscribe to our Newsletter</p>
            <div className="flex gap-x-2">
              <input
                type="type"
                // value=""
                className="w-full bg-white px-3 rounded-sm py-2"
                placeholder="johndoe@email.com"
              />
              <CustomButton
                title="Subscribe!"
                iconStyles="hidden"
                btnType="submit"
                containerStyles="bg-yellow-500 text-white px-2 rounded-sm font-semibold"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
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
              <p className="text-sm font-thin text-white md:text-right text-center">
                All rights reserved &copy; {year}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
