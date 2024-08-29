import React from "react";
import { cn } from "../lib/utils";

const AppLogo = ({ className }) => {
  return (
    <img
      src="/logo.svg"
      className={cn("mx-auto h-6 w-auto object-cover", className)}
      alt="blockchain logo"
    />
  );
};

export default AppLogo;
