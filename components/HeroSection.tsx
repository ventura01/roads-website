"use client";

import CustomButton from "./CustomButton";
import Navbar from "./Navbar";

type Props = {};

const HeroSection = (props: Props) => {
  const handleScroll = () => {};
  return (
    <header id="home" className="">
      <div className="hero bg-[url('/hero-image.jpg')] bg-cover bg-bottom">
        <div className=" bottom-0 left-0 right-0 top-0 z-[10] bg-black/40"></div>
        <Navbar />
        <div className="hero-text mx-auto flex items-center justify-center px-[600px]">
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
                containerStyles="border-4 border-indigo-500 rounded-sm text-white py-3 px-10 hover:border-indigo-800"
                btnType="button"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
