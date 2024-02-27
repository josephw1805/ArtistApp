"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { AudioPlayer } from "react-audio-play";
import Image from "next/image";

const Player = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="bg-gradient-to-r from-tertiary/70 to-primary/10 backdrop-blur-[15px] h-[112px] flex items-center relative z-40"
      >
        <div className="container mx-auto flex flex-col justify-between items-center xl:flex-row">
          {/* text & avatar Img */}
          <div className="hidden w-[300px] xl:flex items-center gap-x-4">
            {/* avatar img */}
            <div className="relative w-16 h-16">
              <Image
                className="rounded-full object-cover"
                src={"/assets/player/avatar.png"}
                fill
                alt=""
                priority
              />
            </div>
            {/* text */}
            <div className="leading-none">
              <div className="text-lg font-medium">Cyndi Wang</div>
              <div className="text-sm font-light">My! Cyndi!</div>
            </div>
          </div>
          {/* player */}
          <div className="w-full max-w-4xl">
            <AudioPlayer
              loop
              preload="none"
              color="#fff"
              style={{
                background: "transparent",
                maxWidth: "100%",
                boxShadow: "none",
              }}
              src="https://firebasestorage.googleapis.com/v0/b/musicapp-755fe.appspot.com/o/songs%2FAlbum-16%2FMy!%20Cyndi!.flac?alt=media"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Player;
