"use client";

import React, { useEffect, useRef } from "react";

// react icons
import { CgArrowTopRight } from "react-icons/cg";
import { SiSpeedtest } from "react-icons/si";
import { FaGasPump, FaAngleLeft, FaAngleRight } from "react-icons/fa";

// swiper js
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

// next image
import busTop from "@/public/Riding-Assets/bus-topology.png";
import car1 from "@/public/Riding-Assets/car1.png";
import car2 from "@/public/Riding-Assets/car2.png";
import car3 from "@/public/Riding-Assets/car3.png";

const SwiperInitializer = ({ swiperRef }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiperRef.current = swiper;
    swiper.update();
  }, [swiper, swiperRef]);

  return null;
};

const PopularMakes = () => {
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <main className="bg-[#040b1f] pb-16">
      <div className="container mx-auto px-3 lg:px-0 -mt-60 md:-mt-80 ">
        <div>
          <header className="flex items-center justify-between pt-20">
            <h2 className="text-white font-bold text-4xl">Popular Makes</h2>
            <button className="flex items-center gap-2 text-white">
              View All <CgArrowTopRight className="text-xl" />
            </button>
          </header>

          {/* tabs */}
          <div className="flex flex-col my-10">
            <div className="flex items-center gap-6 ">
              <span>
                <p className="text-white">Audi</p>
                <div className="border-b-2 border-white mt-5 absolute z-20"></div>
              </span>
              <span>
                <p className="text-white">Ford</p>
                <div className="border-b-2 border-white mt-5 absolute z-20"></div>
              </span>
              <span>
                <p className="text-white">Mercedes Benz</p>
                <div className="border-b-2 border-white mt-5 absolute z-20"></div>
              </span>
            </div>
            <div className="border-t border-[#343949] w-full mt-5 relative z-10"></div>
          </div>

          {/* slider */}
          <div>
            <Swiper
              spaceBetween={30}
              centeredSlides={false}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false} // Disable built-in navigation
              modules={[Autoplay, Pagination, Navigation]}
              loop={true}
              className="w-full h-full"
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
              }}
            >
              <SwiperInitializer swiperRef={swiperRef} />
              <SwiperSlide className="bg-[#040b1f] p-4">
                <div className="flex flex-col h-full">
                  <figure className="mb-4">
                    <Image
                      src={car1}
                      width={300}
                      height={300}
                      alt="Picture of the author"
                      className="w-full h-auto"
                    />
                  </figure>
                  <article className="flex flex-col gap-5 flex-grow">
                    <div>
                      <h2 className="text-white font-bold text-xl">
                        Audi A5 – 2023
                      </h2>
                      <p className="text-white text-sm">
                        2.0 D5 PowerPulse Momentum 5dr AWD…
                      </p>
                    </div>

                    <div>
                      <p className="text-white flex items-center gap-3">
                        <SiSpeedtest />
                        500 Miles
                      </p>
                      <p className="text-white flex items-center gap-3">
                        <FaGasPump />
                        Petrol
                      </p>
                      <p className="text-white flex items-center gap-3">
                        <Image
                          src={busTop}
                          width={20}
                          height={20}
                          alt="automatic"
                        />
                        Automatic
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <div>
                        <del className="text-white">$50,000</del>
                        <h2 className="text-white">$45,000</h2>
                      </div>
                      <div>
                        <button className="text-white flex items-center gap-3">
                          View Details
                          <CgArrowTopRight />
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[#040b1f] p-4">
                <div className="flex flex-col h-full">
                  <figure className="mb-4">
                    <Image
                      src={car2}
                      width={300}
                      height={300}
                      alt="Picture of the author"
                      className="w-full h-auto"
                    />
                  </figure>
                  <article className="flex flex-col gap-5 flex-grow">
                    <div>
                      <h2 className="text-white font-bold text-xl">
                        Audi A5 – 2023
                      </h2>
                      <p className="text-white text-sm">
                        2.0 D5 PowerPulse Momentum 5dr AWD…
                      </p>
                    </div>

                    <div>
                      <p className="text-white flex items-center gap-3">
                        <SiSpeedtest />
                        500 Miles
                      </p>
                      <p className="text-white flex items-center gap-3">
                        <FaGasPump />
                        Petrol
                      </p>
                      <p className="text-white flex items-center gap-3">
                        <Image
                          src={busTop}
                          width={20}
                          height={20}
                          alt="automatic"
                        />
                        Automatic
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <div>
                        <del className="text-white">$50,000</del>
                        <h2 className="text-white">$45,000</h2>
                      </div>
                      <div>
                        <button className="text-white flex items-center gap-3">
                          View Details
                          <CgArrowTopRight />
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[#040b1f] p-4">
                <div className="flex flex-col h-full">
                  <figure className="mb-4">
                    <Image
                      src={car3}
                      width={300}
                      height={300}
                      alt="Picture of the author"
                      className="w-full h-auto"
                    />
                  </figure>
                  <article className="flex flex-col gap-5 flex-grow">
                    <div>
                      <h2 className="text-white font-bold text-xl">
                        Audi A5 – 2023
                      </h2>
                      <p className="text-white text-sm">
                        2.0 D5 PowerPulse Momentum 5dr AWD…
                      </p>
                    </div>

                    <div>
                      <p className="text-white flex items-center gap-3">
                        <SiSpeedtest />
                        500 Miles
                      </p>
                      <p className="text-white flex items-center gap-3">
                        <FaGasPump />
                        Petrol
                      </p>
                      <p className="text-white flex items-center gap-3">
                        <Image
                          src={busTop}
                          width={20}
                          height={20}
                          alt="automatic"
                        />
                        Automatic
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <div>
                        <del className="text-white">$50,000</del>
                        <h2 className="text-white">$45,000</h2>
                      </div>
                      <div>
                        <button className="text-white flex items-center gap-3">
                          View Details
                          <CgArrowTopRight />
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[#040b1f] p-4">
                <div className="flex flex-col h-full">
                  <figure className="mb-4">
                    <Image
                      src={car2}
                      width={300}
                      height={300}
                      alt="Picture of the author"
                      className="w-full h-auto"
                    />
                  </figure>
                  <article className="flex flex-col gap-5 flex-grow">
                    <div>
                      <h2 className="text-white font-bold text-xl">
                        Audi A5 – 2023
                      </h2>
                      <p className="text-white text-sm">
                        2.0 D5 PowerPulse Momentum 5dr AWD…
                      </p>
                    </div>

                    <div>
                      <p className="text-white flex items-center gap-3">
                        <SiSpeedtest />
                        500 Miles
                      </p>
                      <p className="text-white flex items-center gap-3">
                        <FaGasPump />
                        Petrol
                      </p>
                      <p className="text-white flex items-center gap-3">
                        <Image
                          src={busTop}
                          width={20}
                          height={20}
                          alt="automatic"
                        />
                        Automatic
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <div>
                        <del className="text-white">$50,000</del>
                        <h2 className="text-white">$45,000</h2>
                      </div>
                      <div>
                        <button className="text-white flex items-center gap-3">
                          View Details
                          <CgArrowTopRight />
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* slider handler btn */}
            <div className="flex items-center gap-5 mt-4">
              <button
                onClick={handlePrevClick}
                className="p-3 border border-white rounded-full"
              >
                <FaAngleLeft className="text-white text-2xl" />
              </button>
              <button
                onClick={handleNextClick}
                className="p-3 border border-white rounded-full"
              >
                <FaAngleRight className="text-white text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PopularMakes;
