import Image from "next/image";
import Link from "next/link";

export default function Collaborations() {
  return (
    <div className="md:container">
      <h4 className="px-4 text-vasek-white text-vasek-h4 md:text-center font-bold font-satoshi">
        Collaborations
      </h4>
      <div className="flex justify-center items-center gap-x-5 px-5 md:mt-8 w-full ">
        <Link href={"/collabo/alpha"}>
          <div className="relative md:w-1/2 w-2/5 h-32">
            <Image
              src="/logoAlpha.png"
              layout="fill"
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>
        </Link>
        <Link href={"/collabo/phage"}>
          <div className="relative md:1/2 w-3/5 md:h-28 h-32">
            <Image
              src="/logoPhage.png"
              layout="fill"
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
