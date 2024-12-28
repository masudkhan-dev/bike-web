import Image from "next/image";
import React from "react";

// image
import ride1 from "@/public/Riding-Assets/upright.png";
import ride2 from "@/public/Riding-Assets/upright (1).png";
import ride3 from "@/public/Riding-Assets/upright (2).png";

const Position = () => {
  return (
    <main
      className=""
      style={{
        background:
          "linear-gradient(to right, #d7eff9, #daf0fa, #ddf1fa, #dff2fb, #e2f3fb)",
        minHeight: "100vh",
      }}
    >
      <div className="container mx-auto px-3 lg:px-0 pt-10 md:pt-32">
        <div className="flex flex-col justify-center items-center">
          <header>
            <h2 className="font-bold text-xl md:text-3xl text-center">
              Which seating position do you prefer?
            </h2>
            <p className="text-sm text-center md:mx-40 my-3">
              The seating position on an eBike largely determines your riding
              experience. Do you prefer a more active, upright, or more relaxed
              ride feel? Select your preference below. You can choose more than
              one answer.
            </p>
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
        </div>
      </div>
    </main>
  );
};

export default Position;
