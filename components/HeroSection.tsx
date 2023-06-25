"use client";

import CustomButton from "./CustomButton";
import Navbar from "./Navbar";

type Props = {};

const HeroSection = (props: Props) => {
  const handleScroll = () => {};
  return (
    <header id="home" className="">
      <div className="hero z-[1] bg-[url('/hero-image.jpg')] bg-cover bg-center">
        <div className="z-1">
          <Navbar />
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 top-0 z-[0] bg-black/40" /> */}
        <div className="hero-text z-[3] mx-auto flex items-center justify-center px-[600px]">
          <div className="flex flex-col justify-center gap-y-10">
            <h1 className="text-center text-5xl font-semibold text-white">
              Lorem ipsum dolor sit consectetur elit.
            </h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              quaerat? Suscipit porro minima recusandae dicta accusantium
              impedit ipsa in voluptates maiores error eos quia, earum
              architecto fugit, iure explicabo laborum non harum facere at unde
              adipisci!
            </p>
            <div className="inline-block self-center">
              <CustomButton
                title="Explore"
                handleClick={handleScroll}
                containerStyles="bg-indigo-500 rounded-sm text-white py-3 px-10 hover:bg-white hover:text-indigo-500 font-semibold"
                btnType="button"
                iconStyles="ml-3"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
