"use client";

import { ArrowUp } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";

type Props = {};

const ScrollToTopBtn = (props: Props) => {
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTop ? (
        <button
          className="fixed md:bottom-72 hidden md:block bottom-20 right-20 md:right-52 rounded-full bg-gray-900 px-2 py-2 text-indigo-300"
          onClick={scrollUp}
        >
          <ArrowUp size={24} />
        </button>
      ) : null}
    </div>
  );
};

export default ScrollToTopBtn;
