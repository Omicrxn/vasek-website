import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import stringWidth from "string-width";
import remarkToc from "remark-toc";
import remarkMdx from "remark-mdx";

//gray-matter is a package that reads mdx files and separates the metadata from the content
//next-mdx-remote is a package to interpret markdown on nextjs

/* Getting the root of the project. */
const root = process.cwd();

/**
 * It returns a list of all the files in the data directory
 */
export const getFiles = () => fs.readdirSync(path.join(root, "data"));

/**
 * It takes a slug, reads the file, parses the frontmatter, and returns the source and frontmatter
 * @param slug - the name of the file
 */
export const getFileBySlug = async (slug:any) => {
  const mdxSource = fs.readFileSync(
    path.join(root, "data", `${slug}.mdx`),
    "utf-8"
  );

  const { data, content } = await matter(mdxSource);
  const source = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        [remarkGfm, { stringLength: stringWidth }],
        [remarkToc, {}],
      ],
    },
  });
  // console.log("desc "+data.description)
  const descriptionMarkdown = await serialize(data.description, {
    mdxOptions: {
      remarkPlugins: [
        [remarkGfm, { stringLength: stringWidth }],
        [remarkToc, {}],
        [remarkMdx,{}]
      ],
    },
  });
  return {
    source,
    descriptionMarkdown,
    frontmatter: {
      slug,
      ...data,
    },
  };
};

/**
 * It takes all the files in the `data` directory, reads them, and returns an array of objects with the
 * file's metadata and slug.
 *
 * The `getFiles` function is a helper function that returns an array of all the files in the `data`
 * directory.
 *
 * The `reduce` function is a JavaScript function that takes an array and returns a single value. In
 * this case, we're returning an array of objects.
 *
 * The `reduce` function takes two arguments: a callback function and an initial value. The callback
 * function takes two arguments: the accumulator and the current value. The accumulator is the value
 * that gets returned by the `reduce` function. The current value is the current item in the array.
 *
 * The `reduce` function loops through the array and calls the callback function for each item in the
 * array. The callback function returns the accumulator.
 * @returns An array of objects.
 */
export const getAllFilesMetadata = () => {
  const files = getFiles();

  return files.reduce((allPosts:any, postSlug:any) => {
    const mdxSource = fs.readFileSync(
      path.join(root, "data", postSlug),
      "utf-8"
    );
    const { data } = matter(mdxSource);
    return [{ ...data, slug: postSlug.replace(".mdx", "") }, ...allPosts];
  }, []);
};