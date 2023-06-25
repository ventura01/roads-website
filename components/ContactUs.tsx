"use client";

import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

type Props = {};

const ContactUs = (props: Props) => {
  const onSubmit = () => {
    // console.log("Submited");
  };
  const onchange = () => {};
  return (
    <section id="contactus" className="grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:flex">
        <Image
          src="/contact.jpg"
          width={600}
          height={600}
          alt="contact-img"
          className="w-full object-cover object-center"
        />
      </div>
      <div className="mx-auto flex min-h-[350px] flex-col items-center justify-center bg-white md:py-5 py-20 px-10 md:px-0">
        <h2 className="mb-3 text-4xl font-bold">Contact Us</h2>
        <h3 className="text-md mb-5 font-semibold text-center">
          Got a question or proposal? Write us.
        </h3>
        <form onSubmit={onSubmit} className="flex flex-col gap-y-5 py-5">
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              // value={name}
              required
              onChange={onchange}
              id="name"
              placeholder="John Doe"
              className="w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              // value={email}
              required
              id="email"
              onChange={onchange}
              className="w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="johndoe@email.com"
            />
          </div>
          <div>
            <label htmlFor="textarea">Message</label>
            <textarea
              name="message"
              id="textarea"
              // value={message}
              required
              cols={20}
              rows={3}
              onChange={onchange}
              placeholder="Your message"
              className="block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            ></textarea>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              className="rounded text-indigo-500 focus:border-indigo-500"
            />
            <label htmlFor="agree" className="ml-3">
              I agree with the Terms and Privacy Policy.
            </label>
          </div>
          <CustomButton
            title="Submit"
            btnType="submit"
            containerStyles="border-4 font-semibold border-indigo-500 rounded-sm text-indigo-500 py-3 px-10 hover:bg-indigo-500 hover:text-white"
            iconStyles="ml-3"
          />
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
