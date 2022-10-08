import React, { useState } from "react";

import Image from "next/image";
import { getAllFilesMetadata } from "../utils/mdx";
import PostCard from "../components/postCard";

export default function Blog({ posts }: { posts: any }) {
  return (
    <div className="container">
      <h1 className="text-vasek-h1 font-bold font-satoshi">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row rounded-md gap-8 ">
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
