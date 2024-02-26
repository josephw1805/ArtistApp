"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Link from "next/link";
import Nav from "./Nav";
import Socials from "./Socials";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary section h-[500px] xl:h-auto">
      <div className="container mx-auto h-full flex flex-col items-center gap-y-8">
        {/* email link */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Link href="mailto:stacychang63@gmail.com">
            <h2 className="text-[24px] lg:text-[38px] font-semibold leading-tight">
              stacychang63@gmail.com
            </h2>
          </Link>
        </motion.div>
        {/* nav */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Nav
            containerStyles="flex flex-col xl:flex-row justify-center items-center gap-y-4 xl:gap-x-8 text-sm uppercase font-semibold"
            linkStyles="hover:text-white/80 transition-all"
          />
        </motion.div>
        {/* socials */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Socials
            containerStyles="flex text-[24px] gap-x-8"
            iconStyles="hover:text-accent transition-al justify-center"
          />
        </motion.div>
        {/* logo */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
        >
          <Link
            href="#"
            className="relative w-[250px] h-[50px] flex transition-all"
          >
            <Image
              src={"/assets/header/logo.svg"}
              fill
              className="object-contain"
              alt=""
            />
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
