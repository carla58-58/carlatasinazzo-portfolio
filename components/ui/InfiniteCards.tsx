"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const HorizontalScrollCards = ({
  items,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    img: string;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-screen overflow-x-auto",
        className
      )}
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <div className="flex flex-row space-x-4 md:space-x-6 py-4 md:py-6 px-2 min-w-max pr-10">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[90vw] sm:w-[26rem] h-auto min-h-[24rem] md:h-[40rem] rounded-2xl bg-gradient-to-br from-purple-700 to-indigo-900 border-4 border-slate-800 flex flex-col justify-between text-center shadow-lg p-4 md:p-6"
          >
            {/* Top: Quote */}
            <span className="text-sm md:text-base lg:text-lg text-slate-300 mt-2">{item.quote}</span>
            {/* Bottom: Image, Name, Title */}
            <div className="flex flex-col items-center mt-6">
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 md:w-28 md:h-28 rounded-full object-cover mb-2 border-2 border-white"
              />
              <span className="text-white font-bold text-lg md:text-2xl">{item.name}</span>
              <span className="text-xs md:text-base text-slate-200 mb-2">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};