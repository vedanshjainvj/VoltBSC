import React from "react";
import { CiDollar } from "react-icons/ci";
import { GoShieldCheck, GoShieldSlash } from "react-icons/go";
import { HiOutlineLockClosed } from "react-icons/hi";
import { PiMagicWand } from "react-icons/pi";

const ContentComponent = () => {
  return (
    <>
      <div className="flex justify-center pt-5 px-4 sm:px-8 lg:px-0">
        <div className="max-w-xl w-full grid grid-cols-3 sm:p-4">
          <div className="flex items-center justify-center text-gray-600 text-center"></div>

          <div className="bg-primary rounded-tl-3xl flex items-center justify-center text-white text-center p-4">
            <p className="heading text-base sm:text-base font-medium text-zinc-50 mt-4 mb-4 tracking-normal">
              VOLTBSC
            </p>
          </div>

          <div className="bg-gray-300 rounded-tr-3xl flex items-center justify-center text-center p-4">
            <p className="heading text-base sm:text-base font-medium text-zinc-500 mt-4 mb-4 tracking-normal">
              Traditional Cloud Mining
            </p>
          </div>

          <div className="bg-[#f6f6f6] rounded-tl-3xl flex flex-col sm:flex-row items-start  sm:items-center px-3 sm:px-4 sm:gap-2 mx-auto p-4">
            <span className="bg-white rounded-full p-2">
              <CiDollar size={24} />
            </span>
            <p className="heading text-base sm:text-base font-medium text-zinc-500 mt-4 mb-4 tracking-normal">
              Cost Entry Point
            </p>
          </div>

          <div className="bg-primary/20 flex items-center justify-center text-primary text-center p-4">
            Low - Presale (no minimum buy)
          </div>

          <div className="bg-[#f6f6f6]/80 flex items-center justify-center text-gray-800/60 text-center p-4">
            High - Large minimum amounts
          </div>

          <div className="w-full bg-[#f6f6f6]  flex flex-col sm:flex-row items-start  sm:items-center px-3 sm:px-4 sm:gap-2 mx-auto p-4">
            <span className="bg-white rounded-full p-2">
              <GoShieldCheck size={24} />
            </span>
            <p className="heading text-base sm:text-base font-medium text-zinc-500 mt-4 mb-4 tracking-normal">
              Safety and Security
            </p>
          </div>

          <div className="bg-primary/[0.29] flex items-center justify-center text-primary text-center p-4">
            Decentralized, user-owned tradable tokens
          </div>

          <div className="bg-[#d1d5db]/30 flex items-center justify-center text-gray-800/60 text-center p-4">
            Cash deposits required
          </div>

          <div className="w-full bg-[#f6f6f6]  flex flex-col sm:flex-row items-start  sm:items-center px-3 sm:px-4 sm:gap-2 mx-auto p-4">
            <span className="bg-white rounded-full p-2">
              <GoShieldSlash size={24} />
            </span>
            <p className="heading text-base sm:text-base font-medium text-zinc-500 mt-4 mb-4 tracking-normal">
              Risk
            </p>
          </div>

          <div className="bg-primary/20 flex items-center justify-center text-primary text-center p-4">
            User-controlled, easy withdraw & sell
          </div>

          <div className="bg-[#f6f6f6]/95 flex items-center justify-center text-gray-800/60 text-center p-4">
            No refunds, long-term commitments
          </div>

          <div className="w-full bg-[#f6f6f6]  flex flex-col sm:flex-row items-start  sm:items-center px-3 sm:px-4 sm:gap-2 mx-auto p-4 ">
            <span className="bg-white rounded-full p-2">
              <PiMagicWand size={24} />
            </span>
            <p className="heading text-base sm:text-base font-medium text-zinc-500 mt-4 mb-4 tracking-normal">
              Simplicity
            </p>
          </div>

          <div className="bg-primary/[0.29] flex items-center justify-center text-primary text-center p-4">
            Buy with ETH, BNB, USDT, or card and stake
          </div>

          <div className="bg-[#d1d5db]/30 flex items-center justify-center text-gray-800/60 text-center p-4">
            Complicated contracts
          </div>

          <div className="w-full bg-[#f6f6f6]  flex flex-col sm:flex-row items-start  sm:items-center px-3 sm:px-4 sm:gap-2 mx-auto p-4 rounded-bl-3xl">
            <span className="bg-white rounded-full p-2">
              <HiOutlineLockClosed size={24} />
            </span>
            <p className="heading text-base sm:text-base font-medium text-zinc-500 mt-4 mb-4 tracking-normal">
              Lock In Period
            </p>
          </div>

          <div className="bg-primary/20 flex items-center justify-center text-primary text-center p-4">
            Variable dependent on staking
          </div>

          <div className="bg-[#f6f6f6]/95 rounded-br-3xl flex items-center justify-center text-gray-800/60 text-center p-4">
            Fixed timeframe
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentComponent;
