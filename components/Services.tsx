import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

type Props = {};

const Services = (props: Props) => {
  return (
    <section id="services" className="bg-red-800">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <article className="flex items-center md:col-start-1 md:col-end-2 ">
          <div>
            <Image
              src="/services.jpg"
              alt="about-img"
              width={950}
              height={950}
              className="w-full object-cover object-center"
            />
          </div>
        </article>
        <article className="flex flex-col justify-center gap-y-10 md:pl-10 md:pr-80 py-20 md:py-0 px-10 md:px-0 md:col-start-2 md:col-end-3 row-start-1 row-end-2">
          <h2 className="text-center md:text-right text-4xl font-semibold capitalize tracking-widest text-red-300">
            services
          </h2>
          <p className="text-left md:text-right tracking-wide text-red-100">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt eum
            reprehenderit voluptates illum, saepe exercitationem quisquam ipsum
            cum vero accusantium tempora deleniti eius ratione asperiores
            itaque, dicta, quaerat sapiente rem enim commodi veritatis
            blanditiis omnis dignissimos!
          </p>
          <div className="flex justify-center md:inline-block md:self-end">
            <CustomButton
              title="See more"
              btnType="button"
              containerStyles="border-4 font-semibold border-red-100 rounded-sm text-red-100 py-3 px-10 hover:bg-white hover:text-red-500"
              iconStyles="ml-3"
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
