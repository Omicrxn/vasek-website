import React, { useState } from "react";

import Image from "next/image";
import { getAllFilesMetadata } from "../utils/mdx";
import PostCard from "../components/postCard";

export default function Blog({ posts }: { posts: any }) {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center h-96 blog-hero">
          <h1 className="text-vasek-h1 font-bold font-satoshi text-vasek-white m-0 p-0">Nuestro Blog</h1>
          <p className="text-vasek-large text-vasek-white mb-5">
            Vasek no es solo operaciones, también es historias, educación y
            eventos.
          </p>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-3 grid-flow-row rounded-md gap-8 my-10">
        {posts.map((post: any, i: number) => (
          <div key={post.slug}>
            <PostCard href={`/${post.slug}`} post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  return {
    props: { posts },
  };
}
