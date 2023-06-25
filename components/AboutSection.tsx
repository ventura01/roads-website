import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <section id="aboutus" className="bg-teal-800">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <article className="flex flex-col justify-center gap-y-10 md:pl-80 md:pr-10 py-20 md:py-0 px-10 md:px-0">
          <h2 className="text-4xl text-center md:text-left font-semibold capitalize tracking-widest text-teal-300">
            about us
          </h2>
          <p className="tracking-wide text-emerald-100">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt eum
            reprehenderit voluptates illum, saepe exercitationem quisquam ipsum
            cum vero accusantium tempora deleniti eius ratione asperiores
            itaque, dicta, quaerat sapiente rem enim commodi veritatis
            blanditiis omnis dignissimos!
          </p>
          <div className="md:inline-block flex justify-center">
            <CustomButton
              title="See more"
              btnType="button"
              containerStyles="border-4 font-semibold border-teal-100 rounded-sm text-teal-100 py-3 px-10 hover:bg-white hover:text-teal-800"
              iconStyles="ml-3"
            />
          </div>
        </article>
        <article className="flex items-center">
          <div>
            <Image
              src="/about.jpg"
              alt="about-img"
              width={950}
              height={950}
              className="w-full object-cover object-center"
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutSection;
