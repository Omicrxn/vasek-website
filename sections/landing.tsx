import Image from "next/image";
import ScrollingTextBg from "../components/scrollingTextBg";

export default function Landing() {
  return (
    <div className="h-full relative flex justify-center  items-cente bg-vasek-black">
      <div className=" flex md:flex-row flex-col justify-center items-center z-10">
        <div className=" md:text-left text-center mx-2">
          <h1 className="md:text-vasek-h1 text-vasek-h2 font-bold text-vasek-white font-satoshi">
            Lo que la gente no sabe
          </h1>
          <p className="md:text-vasek-large text-vasek-medium font-medium text-vasek-white mb-7">
            Con Vasek tendrás los mejores picks y noticias sobre las apuestas de
            basket.
          </p>
          <a
            href=""
            className="bg-vasek-purple-500 hover:bg-vasek-purple-600 active:bg-vasek-purple-700  px-5 py-3 rounded text-vasek-white  font-satoshi font-bold"
          >
            Únete a vasek
          </a>
        </div>
        <Image src="/player 1.png" width={400} height={400} />
      </div>
      <ScrollingTextBg />
    </div>
  );
}
