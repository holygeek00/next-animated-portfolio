"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full overflow-y-scroll"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row lg:justify-center sm:px-8 md:px-2 lg:px-0 xl:px-10">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative mr-10">
          <img src="/back.jpg" alt="" fill className="w-[80rem] h-[50rem] absolute top-1/2 -translate-y-1/2 left-0 rounded-2xl shadow-2xl" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Unlock Your Business Potential with Expert Outsourcing!
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Are you struggling to create captivating advertisements that truly resonate with your target audience? Don&apos;t let advertising woes hold your business back! Outsource your ad creation and management to our team of seasoned professionals and unleash the power of expert marketing strategies.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact
            </button>
          </div>
        </div>
      </div>
      <div className="h-full flex flex-col lg:flex-row lg:justify-center sm:px-8 md:px-2 lg:px-0 xl:px-10">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative mr-10">
          <img src="/two.jpg" alt="" fill className="w-[50rem] h-[50rem] absolute top-1/2 -translate-y-1/2 left-0 rounded-2xl shadow-2xl" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-start justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-start">
            Software Development!
          </h1>
          <h2 className="text-3xl">Innovative Coding, Endless Possibilities</h2>
          <p className="md:text-xl text-start">
            We blend cutting-edge technology with deep industry expertise to craft stunning software solutions. From concept to execution, we&apos;re dedicated to delivering genuine technological innovation.</p>

            <h2 className="text-3xl">Custom Development, Tailored Solutions</h2>
          <p className="md:text-xl text-start">
          Every project is unique. We meticulously listen to your needs, crafting bespoke solutions that align perfectly with your business objectives and nuances. Whatever you require, we deliver.
          </p>
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black hover:ring-1 hover:ring-blue-500">
              View Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black hover:ring-blue-500 ">
              Contact
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
