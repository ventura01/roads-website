import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

type Props = {};

const AboutSection = (props: Props) => {
  return (
    <section
      id="aboutus"
      className="container mx-auto grid max-w-screen-xl grid-cols-1 md:grid-cols-2"
    >
      <article className="flex flex-col gap-y-10 py-32 pr-10">
        <h2 className="text-4xl tracking-widest capitalize font-semibold">about us</h2>
        <p className="tracking-wide">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt eum
          reprehenderit voluptates illum, saepe exercitationem quisquam ipsum
          cum vero accusantium tempora deleniti eius ratione asperiores itaque,
          dicta, quaerat sapiente rem enim commodi veritatis blanditiis omnis
          dignissimos!
        </p>
        <div className="inline-block">
          <CustomButton
            title="See more"
            btnType="button"
            containerStyles="border-4 font-semibold border-indigo-500 rounded-sm text-black py-3 px-10 hover:border-indigo-300"
          />
        </div>
      </article>
      <article className="flex items-center">
        <div >
          <Image
            src="/about.png"
            alt="about-img"
            width={950}
            height={950}
            className=""
          />
        </div>
      </article>
    </section>
  );
};

export default AboutSection;
