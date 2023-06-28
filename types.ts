import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  iconStyles?: string;
  btnType?: "button" | "submit";
}
export interface FooterLinksProps {
  title: string;
  links: [{ title: string; url: string }];
}
export interface TestimonialsProps {
  name: string;
  url: string;
  text: string;
  jobTitle: string;
}
