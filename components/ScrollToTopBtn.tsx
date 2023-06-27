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
          className="fixed bottom-72 right-52 rounded-full bg-white px-3 py-3 text-indigo-500"
          onClick={scrollUp}
        >
          <ArrowUp size={32} />
        </button>
      ) : null}
    </div>
  );
};

export default ScrollToTopBtn;
