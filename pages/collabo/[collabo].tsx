import Link from "next/link";
import Image from "next/image";
import ScrollingTextBg from "../../components/scrollingTextBg";
import { motion } from "framer-motion";
import { getFilesCollabo, getFileByCollabo } from "../../utils/mdx";

export default function Collabo({ source }: { source: any }) {
  const parsedSource = JSON.parse(source);
  return (
    <div className="h-screen relative flex flex-col justify-center  items-center bg-vasek-black overflow-hidden">
      {/* Heading */}
      <div className=" rounded-full h-[50vw] w-[50vw] bg-vasek-purple-600/30 backdrop-blur-[2px]  flex flex-col justify-center items-center text-center md:gap-0 gap-y-12 z-10 p-10">
        {/* text container */}
        <div>
          <div className="mb-5">
            <Image
              src={parsedSource.image}
              width={parsedSource.width}
              height={parsedSource.height}
              layout="fixed"
            />
          </div>
          <div className="flex flex-col justify-center items-center flex-1 ">
            <p className="mb-8 text-vasek-large text-vasek-white">
              {JSON.stringify(parsedSource.desc)}
            </p>
            <Link href={"https://discord.gg/aD7SPf9q"} passHref>
              <a
                target="_blank"
                rel="noreferrer"
                className="bg-vasek-purple-500 hover:bg-vasek-purple-600 active:bg-vasek-purple-700  px-5 py-3 rounded text-vasek-white  font-satoshi font-bold "
              >
                Meet {`${parsedSource.name}`}
              </a>
            </Link>
          </div>
        </div>
      </div>

      <ScrollingTextBg />
    </div>
  );
}

/**
 * It takes a slug as a parameter, and returns the source and frontmatter of the file with that slug
 * @returns The props object is being returned.
 */
export async function getStaticProps({ params }: { params: any }) {
  const { source } = await getFileByCollabo(params.collabo);
  return {
    props: { source },
  };
}

/**
 * GetStaticPaths() is a function that returns an object with a paths property and a fallback property.
 * The paths property is an array of objects, each object having a params property. The params property
 * is an object with a slug property. The slug property is a string. The fallback property is a boolean
 * @returns An object with two properties:
 */
export async function getStaticPaths() {
  const collabos = await getFilesCollabo();
  const paths = collabos.map((collabo: any) => ({
    params: {
      collabo: collabo.replace(/\.json/, ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
