import Image from "next/image";
import React from "react";

// image
import about from "@/public/Riding-Assets/about2.png";

const DutchDesign = () => {
  return (
    <main
      style={{
        background:
          "linear-gradient(to right, #d7eff9, #daf0fa, #ddf1fa, #dff2fb, #e2f3fb)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-10 justify-center items-center bg-white shadow-lg rounded-xl md:max-w-5xl mx-auto overflow-hidden">
          <div className="md:w-1/2 p-6 md:p-10">
            <h2 className="font-bold text-2xl md:text-3xl mb-4 text-center">
              Dutch Design
            </h2>
            <p className="text-sm mb-4 text-center">
              At Gazelle, we produce bikes of unique quality and appearance with
              a minimum of weight and maximum comfort. Our mission is to make
              cycling easy and fun for everyone. This is why we strive to
              continue to promote smart Dutch design and technical innovation.
            </p>
            <p className="text-sm text-center">
              Dutchies are probably the most critical customers of all when it
              comes to bikes. Therefore, we are confident that our bikes deliver
              exactly what cyclists around the world dream of.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src={about}
              width={1100}
              height={1100}
              alt="Dutch Design"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DutchDesign;
