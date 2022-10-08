import React, { useState } from "react";
import { MDXRemote } from "next-mdx-remote";
import { getFileBySlug, getFiles } from "../utils/mdx";
import Image from "next/image";

import Link from "next/link";
import { AnyTxtRecord } from "dns";
// import MDXComponents from "../components/mdx-components";

export default function TeamMember({
    source,
    descriptionMarkdown,
    frontmatter,
  }:{source:any,descriptionMarkdown:any,frontmatter:any}){
    return(
      <div className="container">


            
          
        <div className="prose prose-p:text-justify prose-headings:text-vasek-purple-500 prose-headings:font-satoshi prose-headings:font-bold">
        <MDXRemote
              {...source}
              // components={MDXComponents}
              lazy
            />
        </div>
        </div>
    )
};
/**
 * It takes a slug as a parameter, and returns the source and frontmatter of the file with that slug
 * @returns The props object is being returned.
 */
 export async function getStaticProps({ params }:{params:any}) {
    const { source, descriptionMarkdown, frontmatter } = await getFileBySlug(
      params.slug
    );
    return {
      props: { source, frontmatter, descriptionMarkdown },
    };
  }
  /**
   * GetStaticPaths() is a function that returns an object with a paths property and a fallback property.
   * The paths property is an array of objects, each object having a params property. The params property
   * is an object with a slug property. The slug property is a string. The fallback property is a boolean
   * @returns An object with two properties:
   */
  export async function getStaticPaths() {
    const members = await getFiles();
    const paths = members.map((member) => ({
      params: {
        slug: member.replace(/\.mdx/, ""),
      },
    }));
    return {
      paths,
      fallback: false,
    };
  }