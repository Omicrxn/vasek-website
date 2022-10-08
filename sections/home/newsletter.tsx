import {
  FaTelegramPlane,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export default function Newsletter() {
  return (
    // <div className="grid  grid-flow-col gap-0 h-[500px]">
    //   {/* <div className="row-span-3 w-1/2 bg-vasek-black border-r-2 border-vasek-white">
    //     <div className="flex justify-center items-start">
    //         <p className="-rotate-90 translate-y-[50%] text-vasek-h4 font-bold font font-satoshi text-vasek-white m-0 p-0">VASEK</p>
    //     </div>
    //   </div>
    //   <div className="row-span-2 col-span-12 border-b-2 border-vasek-white"></div>
    //   <div className="p-y-1 col-span-12"></div> */}

    // </div>
    <div className="flex md:h-[90vh] h-[50vh]">
      {/* LEFT */}
      <div className=" md:w-[5%] w-[15%] h-full border-r-4 border-vasek-white">
        <p className="-rotate-90 translate-y-[110%] md:text-vasek-h4 text-vasek-h6 font-bold font font-satoshi text-vasek-white m-0 p-0">
          VASEK
        </p>
      </div>
      {/* RIGHT */}
      <div className="flex flex-col md:w-[95%] w-[85%]">
        {/* RIGHT/TOP */}
        <div className=" h-[90%] border-b-4 flex justify-center items-center">
          <div className="bg-vasek-white md:h-[75vh] md:w-[75vh] h-[35vh] w-[35vh] rounded-full flex flex-col justify-center items-center md:gap-6 gap-2">
            <h2 className="md:text-vasek-h2 text-vasek-large font-bold font-satoshi text-center">
              UNETE AL METODO VASEK
            </h2>
            <a
              href="https://t.me/+eISveQd3cL00MDc0"
              target="_blank"
              rel="noreferrer"
              className="md:text-vasek-medium text-vasek-small border-2 border-vasek-purple-500 hover:bg-vasek-purple-500 active:bg-vasek-purple-700  md:px-5 md:py-3 p-2 rounded text-vasek-purple-500 hover:text-vasek-white  font-satoshi font-bold"
            >
              Entra en nuestro telegram
            </a>
          </div>
        </div>
        {/* RIGHT/BOTTOM */}
        <div className="h-[10%] flex items-center p-5">
          <div className="flex ml-auto  flex-1 justify-start">
            <a href="https://t.me/+eISveQd3cL00MDc0" target="_blank" rel="noreferrer">
              <FaTelegramPlane className="text-vasek-white text-lg md:text-2xl mr-2" />
            </a>
            <a
              href="https://www.instagram.com/vasek.method/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="text-vasek-white text-lg md:text-2xl mr-2" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCxJT3MosFfyeWU_yeuAta_Q"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube className="text-vasek-white text-lg md:text-2xl mr-2" />
            </a>
            <a
              href="https://www.tiktok.com/@vasekmethod"
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok className="text-vasek-white text-lg md:text-2xl" />
            </a>
          </div>
          <p className="text-vasek-small text-vasek-white">@ VASEK 2022</p>
        </div>
      </div>
    </div>
  );
}
