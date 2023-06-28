"use client";

import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { testimonials } from "@/data";
import Image from "next/image";

type Props = {};

const Testimonials = (props: Props) => {
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    if (index === testimonials.length - 1) {
      return setIndex(0);
    }
    setIndex(index + 1);
  };
  const handlePrev = () => {
    if (index === 0) {
      return setIndex(testimonials.length - 1);
    }
    setIndex(index - 1);
  };
  return (
    <section id="testimonials" className="py-20">
      <div className="">
        <h3 className="text-4xl text-center mb-20 font-bold">What they&apos;ve said</h3>
        <div className="container mx-auto hidden max-w-screen-xl grid-cols-1 gap-y-16 md:grid md:grid-cols-3 md:gap-x-5 md:gap-y-0 ">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative rounded-xl border-2 bg-slate-700 px-5 pb-10 pt-16 shadow-xl"
            >
              <div>
                <Image
                  src={testimonial.url}
                  width={300}
                  height={300}
                  alt="Test-image"
                  loading="lazy"
                  className="absolute right-1/2 top-0 w-20 -translate-y-1/2 translate-x-1/2 transform rounded-full border-4"
                />
              </div>
              <div>
                <p className="mb-5 text-gray-300">{testimonial.text}</p>
                <h4 className="text-right text-lg font-medium capitalize text-yellow-500">
                  {testimonial.name}
                </h4>
                <span className="block text-right text-sm text-yellow-300">
                  {testimonial.jobTitle}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* SLIDER */}
        <div className="md:hidden">
          <div className="relative mb-3 rounded-xl border-2 bg-slate-700 px-5 pb-10 pt-16 shadow-xl">
            <div>
              <Image
                src={testimonials[index].url}
                width={300}
                height={300}
                alt="Test-image"
                loading="lazy"
                className="absolute right-1/2 top-0 w-20 -translate-y-1/2 translate-x-1/2 transform rounded-full border-4"
              />
            </div>
            <div>
              <p className="mb-5 text-gray-300">{testimonials[index].text}</p>
              <h4 className="text-right text-lg font-medium capitalize text-indigo-500">
                {testimonials[index].name}
              </h4>
              <span className="block text-right text-sm text-indigo-300">
                {testimonials[index].jobTitle}
              </span>
            </div>
          </div>
          <div className="flex justify-center gap-x-3">
            <button
              onClick={handleNext}
              className="rounded-full bg-gray-700 px-3 py-3 text-indigo-300"
            >
              <CaretLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="rounded-full bg-gray-700 px-3 py-3 text-indigo-300"
            >
              <CaretRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
