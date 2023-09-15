import Image from "next/image";
import ScrollingTextBg from "../../components/scrollingTextBg";
import { motion } from "framer-motion";
export default function Landing() {
  return (
    <div className="h-screen relative flex flex-col justify-center  items-center bg-vasek-black">
      {/* Heading */}
      <div className="md:container  flex md:flex-row flex-col justify-center items-center md:gap-0 gap-y-12 z-10">
        {/* text container */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.5,
              },
            },
          }}
          className=" md:text-left text-center md:mx-2"
        >
          <h1 className="md:text-vasek-h1 xs:text-vasek-h2 text-vasek-h5  font-bold text-vasek-white font-satoshi mx-0">
            Lo que la gente no sabe
          </h1>
          <p className="md:text-vasek-large text-vasek-medium font-medium text-vasek-white mb-7">
            Con Vasek aprenderás a transformar el azar en beneficios con fórmulas matemáticas.
          </p>
          <a
            href="https://t.me/+eISveQd3cL00MDc0"
            target="_blank"
            rel="noreferrer"
            className="bg-vasek-purple-500 hover:bg-vasek-purple-600 active:bg-vasek-purple-700  px-5 py-3 rounded text-vasek-white  font-satoshi font-bold"
          >
            Únete a vasek
          </a>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 1,
              },
            },
          }}
          className=" lg:w-1/2 md:w-[75%] w-full"
        >
          <Image
            src="/landing.png"
            width={400}
            height={400}
            alt="basketball player"
            layout="responsive"
          />
        </motion.div>
      </div>
      {/* <div className="container self-start">
        <h6 className="text-vasek-white text-vasek-h6">Collaborations:</h6>
        <div className="flex justify-center items-center">
          <Image src="/logoAlpha.png" width={200} height={129} layout="fixed" />
          <Image
            src="/logoPhage.png"
            width={195.6}
            height={54.4}
            layout="fixed"
          />
        </div>
      </div> */}
      {/* Background */}
      <ScrollingTextBg />
    </div>
  );
}
