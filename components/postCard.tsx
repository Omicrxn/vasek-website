import Image from "next/image";
import NextLink from "next/link";

export default function PostCard({ post,href }: { post: any,href:string }) {
  return (
    <NextLink key={href} href={href}>
    <div className="relative rounded-md bg-black h-full w-full cursor-pointer">
      <img src={post.cover}  alt="" className="rounded-md object-cover w-full h-96 brightness-[.95] hover:brightness-75 active:brightness-50" />
      <div className="absolute bottom-5 left-5">
        <p className="text-vasek-white/80 text-vasek-large">{post.section}</p>
      <h6 className=" text-vasek-h6 text-vasek-white">
        {post.title}
      </h6>
      </div>
     
    </div>
    </NextLink>
  );
}
