import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

type Props = {};

const Services = (props: Props) => {
  return (
    <section id="services" className="bg-neutral-300">
      <div className="container mx-auto grid max-w-screen-xl grid-cols-1 md:grid-cols-2">
        <article className="flex items-center">
          <div>
            <Image
              src="/services.png"
              alt="about-img"
              width={950}
              height={950}
              className="mix-blend-multiply"
            />
          </div>
        </article>
        <article className="flex flex-col gap-y-10 py-32 pl-10">
          <h2 className="text-4xl font-semibold capitalize text-right tracking-widest">
            services
          </h2>
          <p className="tracking-wide text-right">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt eum
            reprehenderit voluptates illum, saepe exercitationem quisquam ipsum
            cum vero accusantium tempora deleniti eius ratione asperiores
            itaque, dicta, quaerat sapiente rem enim commodi veritatis
            blanditiis omnis dignissimos!
          </p>
          <div className="inline-block self-end">
            <CustomButton
              title="See more"
              btnType="button"
              containerStyles="border-4 font-semibold border-indigo-500 rounded-sm text-black py-3 px-10 hover:border-indigo-300"
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
