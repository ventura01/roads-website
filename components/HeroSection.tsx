"use client";

import ImageHero from "./ImageHero";
import CustomButton from "./CustomButton";
import Navbar from "./Navbar";

type Props = {};

const HeroSection = (props: Props) => {
  const handleScroll = () => {};
  return (
    <header id="home" className="">
      <div className="hero bg-[url('/hero-image.jpg')] bg-cover bg-bottom">
        <Navbar />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-black/40"></div>
        <div className="container mx-auto grid max-w-screen-xl grid-cols-1 md:grid-cols-2">
          {/* <div className="flex flex-col justify-center gap-y-10">
            <h1 className="text-6xl font-semibold text-white">
              Lorem ipsum dolor sit amet consectetur elit.
            </h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              quaerat? Suscipit porro minima recusandae dicta accusantium
              impedit ipsa in voluptates maiores error eos quia, earum
              architecto fugit, iure explicabo laborum non harum facere at unde
              adipisci!
            </p>
            <CustomButton
              title="Explore"
              handleClick={handleScroll}
              containerStyles="inline-block bg-purple-600 rounded-xl text-white py-4 px-6"
              btnType="button"
            />
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
