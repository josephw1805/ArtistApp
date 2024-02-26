"use client";

import { useState } from "react";

import useSWR from "swr";

import { AudioPlayer } from "react-audio-play";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";

// fetcher
const fetcher = (url) => fetch(url).then((res) => res.json());

const AlbumSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { data, error } = useSWR(
    "https://artistappserver.onrender.com/albums",
    fetcher
  );

  if (error) return "Failed to fetch data";
  if (!data) return "Loading...";

  return (
    <>
      {/* top slider */}
      <Swiper
        effect={"coverflow"}
        speed={1000}
        spaceBetween={80}
        allowTouchMove={false}
        thumbs={{
          swiper: thumbsSwiper,
        }}
        modules={[FreeMode, Navigation, Thumbs, EffectCoverflow]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="album-slider"
      >
        {data.map((album) => {
          return (
            <SwiperSlide key={album.id} className="mb-12">
              <div className="w-full bg-secondary/80 rounded-[10px] flex flex-col xl:flex-row items-center p-6 xl:p-12 gap-x-12">
                {/* img */}
                <div className="hidden xl:flex xl:w-[500px] xl:h-[500px] relative cursor-pointer rounded-[10px] overflow-hidden">
                  <Image
                    src={album.img}
                    fill
                    priority
                    alt=""
                    className="object-contain"
                  />
                </div>
                {/* track container */}
                <div className="flex flex-1 w-full max-h-[500px]">
                  {/* tracks */}
                  <div className="flex-1 flex flex-col xl:px-12 overflow-y-scroll scrollbar-none">
                    {album.tracks?.map((track, index) => {
                      return (
                        <div className="flex flex-1 w-full" key={index}>
                          {/* track name */}
                          <div className="flex flex-1 items-center gap-x-2 capitalize font-semibold xl:font-extrabold">
                            <div className="text-accent text-sm xl:text-lg">
                              {index + 1 >= 10
                                ? `${index + 1}.`
                                : `0${index + 1}.`}
                            </div>
                            <div className="text-sm xl:text-base">
                              {track.name}
                            </div>
                          </div>
                          {/* player */}
                          <div>
                            <AudioPlayer
                              className="album-player"
                              style={{
                                background: "transparent",
                                boxShadow: "none",
                                maxWidth: "100%",
                              }}
                              loop
                              volumePlacement={index > 6 ? "top" : "bottom"}
                              color="#fff"
                              preload="none"
                              src={track.src}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* thumb slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1310: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        spaceBetween={30}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        className="thumb-slider"
      >
        {data?.map((thumb, index) => {
          return (
            <SwiperSlide
              key={index}
              className="relative group overflow-hidden border-2 border-transparent w-[254px] rounded-[10px]"
            >
              {/* img */}
              <div className="relative w-[195px] h-[195px] sm:w-[360px] sm:h-[360px] md:w-[240px] md:max-h-[240px] cursor-pointer">
                <Image
                  src={thumb.img}
                  fill
                  priority
                  alt=""
                  className="object-cover group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default AlbumSlider;
