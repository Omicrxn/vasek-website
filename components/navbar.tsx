import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import Lottie from "react-lottie-player";
import type { AnimationDirection } from "lottie-web";
import menuIconData from "../public/icons/menu.json";
import Link from "next/link";
import {
  FaTelegramPlane,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const links = [
  // { name: "Academia", to: "/academia", id: 3 },
  { name: "Blog", to: "/blog", id: 4 },
  { name: "Resultados", to: "/results", id: 5 },
  { name: "FAQ", to: "/faq", id: 6 },
];

const NavBar = () => {
  const [isActive, setActive] = useState(false);
  const [menuState, setMenuState] = useState<{
    play: boolean;
    direction: AnimationDirection;
  }>({ play: false, direction: 1 });
  const [open, cycleOpen] = useCycle(false, true);
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };
  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };
  const handleClick = () => {
    cycleOpen();
    setMenuState({ play: !menuState.play, direction: open ? -1 : 1 });
    setActive(!isActive);
  };
  return (
    <nav className="bg-vasek-white">
      <div className="container flex md:flex-row flex-row-reverse py-5 items-center justify-between">
        <div className="gap-5 md:flex flex-1 text-lg font-semibold hidden">
          {links.map(({ name, to, id }) => (
            <a className={``} key={id} href={to}>
              {name}
            </a>
          ))}
        </div>
        <button
          className="pointer z-30 border-none md:hidden "
          onClick={handleClick}
        >
          <Lottie
            loop={false}
            play={menuState.play}
            animationData={menuIconData}
            rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
            direction={menuState.direction}
            style={{ width: 32, height: 32 }}
            speed={1.5}
            onComplete={() =>
              setMenuState({
                play: !menuState.play,
                direction: menuState.direction === 1 ? -1 : 1,
              })
            }
          />
        </button>
        <AnimatePresence>
          {open && (
            <motion.aside
              className={`flex flex-col z-20 justify-center bg-vasek-white w-1/2 h-screen fixed right-0 top-0 md:hidden`}
              initial={{ width: 0 }}
              animate={{ width: "50%" }}
              exit={{
                width: 0,
                transition: { delay: 0.8, duration: 0.3 },
              }}
            >
              <motion.div
                className=" "
                initial="closed"
                animate="open"
                variants={sideVariants}
                exit="closed"
              >
                {links.map(({ name, to, id }) => (
                  <motion.a
                    className={` no-underline text-3xl font-semibold block m-5`}
                    key={id}
                    href={to}
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                  >
                    {name}
                  </motion.a>
                ))}
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>

        <Link
          href="/"
          className="flex md:flex-1 md:justify-center md:ml-0 ml-5 "
        >
          <Image
            src="/vasek/Isotype_Black 1.png"
            alt="vasek logo"
            width={122}
            height={30}
            layout="fixed"
            className="hover:cursor-pointer"
          />
        </Link>
        <div className="md:flex ml-auto  flex-1 justify-end hidden">
          <a href="https://t.me/+eISveQd3cL00MDc0" target="_blank" rel="noreferrer">
            <FaTelegramPlane className="text-lg md:text-2xl mr-2" />
          </a>
          <a
            href="https://www.instagram.com/vasek.method/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="text-lg md:text-2xl mr-2" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCxJT3MosFfyeWU_yeuAta_Q"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube className="text-lg md:text-2xl mr-2" />
          </a>
          <a
            href="https://www.tiktok.com/@vasekmethod"
            target="_blank"
            rel="noreferrer"
          >
            <FaTiktok className="text-lg md:text-2xl" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
