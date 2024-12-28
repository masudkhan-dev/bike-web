import React from "react";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import waterMrk from "@/public/Riding-Assets/watermark.png";

const GuideBox = ({ title, description }) => (
  <div className="bg-white w-60 p-5 rounded-xl">
    <h2 className="font-bold text-2xl">{title}</h2>
    <article className="flex items-center gap-2 mt-3">
      <p className="text-sm">{description}</p>
      <FaAngleRight className="text-sm" />
    </article>
  </div>
);

const WaterMark = () => {
  return (
    <main className="bg-gradient-to-r from-[#d7eff9] to-[#e2f3fb] min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-3 lg:px-0 -mt-52 md:-mt-96">
        <div className="relative flex flex-col justify-center items-center">
          <Image
            src={waterMrk}
            width={900}
            height={900}
            alt="Watermark"
            priority
          />
          <div className="flex flex-col md:flex-row items-center gap-10 absolute">
            <GuideBox
              title="Bike Selection Guide"
              description="Find the right eBikes"
            />
            <GuideBox
              title="Bike Selection Guide"
              description="Find the right eBikes"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default WaterMark;
