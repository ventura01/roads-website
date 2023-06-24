"use client";

import { CustomButtonProps } from "@/types";
import { ArrowRight } from "@phosphor-icons/react";
// type Props = {};

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  iconStyles,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      {title}
      <ArrowRight size={18} className={`inline-block ${iconStyles}`} />
    </button>
  );
};

export default CustomButton;
