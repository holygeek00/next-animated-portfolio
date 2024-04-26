"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <img src="https://cdn.dribbble.com/userupload/13257615/file/original-e8ef9d309a6a1e35aa758454d7054838.jpg?resize=800x1000" alt="" fill className="object-cover absolute top-20 rounded-2xl shadow-2xl" />
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
    </motion.div>
  );
};

export default Homepage;
