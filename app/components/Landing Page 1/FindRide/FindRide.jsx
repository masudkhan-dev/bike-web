import Image from "next/image";
import React from "react";

// image
import ride1 from "@/public/Riding-Assets/upright.png";
import ride2 from "@/public/Riding-Assets/upright (1).png";
import ride3 from "@/public/Riding-Assets/upright (2).png";

const FindRide = () => {
  return (
    <main
      style={{
        background:
          "linear-gradient(to right, #d7eff9, #daf0fa, #ddf1fa, #dff2fb, #e2f3fb)",
        minHeight: "100vh",
      }}
    >
      <div className="container mx-auto px-3 lg:px-0">
        <div className="flex flex-col justify-center items-center">
          <header>
            <h2 className="font-bold text-xl md:text-3xl text-center">
              Find Your Ride
            </h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4 mt-4">
            <div className="">
              <Image
                src={ride1}
                width={300}
                height={300}
                alt="Seating position"
                className="object-cover"
              />
            </div>
            <div className="">
              <Image
                src={ride2}
                width={300}
                height={300}
                alt="Seating position"
                className="object-cover"
              />
            </div>
            <div className="">
              <Image
                src={ride3}
                width={300}
                height={300}
                alt="Seating position"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex justify-end items-end my-5">
            <p className="text-[#F05454] text-sm text-right">
              View all electrik bikes ...
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FindRide;
