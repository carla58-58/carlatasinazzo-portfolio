"use client";

import React from "react";
import { testimonials } from "@/data";
import { HorizontalScrollCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading text-center">
        References from
        <span className="text-purple"> work colleagues</span>
      </h1>
      <div className="w-full mt-10">
        <HorizontalScrollCards items={testimonials} />
      </div>
    </section>
  );
};

export default Clients;