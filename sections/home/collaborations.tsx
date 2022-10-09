import Image from "next/image";
import Link from "next/link";

export default function Collaborations() {
  return (
    <div className="container">
      <h4 className="px-4 text-vasek-white text-vasek-h4 text-center font-bold font-satoshi">
        Collaborations
      </h4>
      <div className="flex justify-center items-center gap-x-5">
        <Link href={"/collabo/alpha"}>
          <Image
            src="/logoAlpha.png"
            width={300}
            height={193.5}
            layout="fixed"
          />
        </Link>
        <Image src="/logoPhage.png" width={323.6} height={90} layout="fixed" />
      </div>
    </div>
  );
}
