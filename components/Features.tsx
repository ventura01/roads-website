import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

type Props = {};

const Features = (props: Props) => {
  return (
    <section id="features" className="">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="container mx-auto max-w-screen-xl bg-yellow-600 ">
          <div className="">
            <article className="flex flex-col gap-y-10 py-32 pl-80">
              <h2 className="text-3xl font-semibold uppercase tracking-wide text-yellow-200">
                option
              </h2>
              <p className="tracking-wide text-yellow-100">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                eum reprehenderit voluptates illum, saepe exercitationem
                quisquam ipsum cum vero accusantium tempora deleniti eius
                ratione asperiores itaque, dicta, quaerat sapiente rem enim
                commodi veritatis blanditiis omnis dignissimos!
              </p>
              <div className="inline-block self-start">
                <CustomButton
                  title="See more"
                  btnType="button"
                  containerStyles="border-4 font-semibold border-white rounded-sm text-yellow-200 py-3 px-10 hover:border-indigo-500"
                />
              </div>
            </article>
          </div>
        </div>
        <div>
          <Image
            src="/feature.jpg"
            width={600}
            height={600}
            alt="feature-img"
            className="max-h-[550px] w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="container mx-auto grid max-w-screen-xl grid-cols-1  md:grid-cols-2"></div>
      <div className="container mx-auto  max-w-screen-xl "></div>
    </section>
  );
};

export default Features;
