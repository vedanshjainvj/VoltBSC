import React from "react";
import { cn } from "../lib/utils";
import voltlogo from "../assets/voltlogo2.png";

const AppLogo = ({ className }) => {
  return (
    <img
      src={voltlogo}
      className={cn("mx-auto h-12 w-auto object-cover mix-blend-multiply", className)}
      alt="blockchain logo"
    />
  );
};

export default AppLogo;
