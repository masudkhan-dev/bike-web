import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// images
import team1 from "@/public/Riding-Assets/team1.png";
import team2 from "@/public/Riding-Assets/team2.png";
import team3 from "@/public/Riding-Assets/team3.png";
import team4 from "@/public/Riding-Assets/team4.png";
import team5 from "@/public/Riding-Assets/team5.png";

const OurTeam = () => {
  return (
    <main className="flex items-center justify-center bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50">
      <div className="container mx-auto px-3 lg:px-0 py-10  ">
        <header className="my-5">
          <h2 className="font-bold text-2xl text-center">Our Team</h2>
        </header>
        <Marquee speed={50} gradient={false} className="py-4 mt-10">
          <div className="flex space-x-6">
            <div className="flex-shrink-0 ml-5">
              <Image
                src={team1}
                width={200}
                height={150}
                alt="Team member 1"
                className="object-cover"
              />
            </div>
            <div className="flex-shrink-0">
              <Image
                src={team2}
                width={200}
                height={150}
                alt="Team member 2"
                className="object-cover"
              />
            </div>
            <div className="flex-shrink-0">
              <Image
                src={team3}
                width={200}
                height={150}
                alt="Team member 3"
                className="object-cover"
              />
            </div>
            <div className="flex-shrink-0">
              <Image
                src={team4}
                width={200}
                height={150}
                alt="Team member 4"
                className="object-cover"
              />
            </div>
            <div className="flex-shrink-0">
              <Image
                src={team5}
                width={200}
                height={150}
                alt="Team member 5"
                className="object-cover"
              />
            </div>
            <div className="flex-shrink-0 ">
              <Image
                src={team3}
                width={200}
                height={150}
                alt="Team member 3"
                className="object-cover"
              />
            </div>
          </div>
        </Marquee>
      </div>
    </main>
  );
};

export default OurTeam;
