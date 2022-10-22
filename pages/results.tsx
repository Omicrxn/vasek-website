import { InferGetStaticPropsType, GetStaticProps } from "next";
import { promises as fs } from "fs";
import path from "path";
import TableSection from "../sections/home/tableSection";
export default function Results({
  csvData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="md:container px-4">
      <h1 className="md:text-vasek-h1 text-vasek-h4 font-satoshi font-bold">
        Resultados
      </h1>

      <TableSection csvData={csvData} />
      <div className="md:hidden flex flex-col">
        <p>Descarga nuestros resultados más recientes</p>
        <a
          download
          href="temp-2020-2022.pdf"
          className="text-center bg-vasek-purple-500 hover:bg-vasek-purple-600 active:bg-vasek-purple-700  px-5 py-3 rounded text-vasek-white  font-satoshi font-bold"
        >
          Descarga
        </a>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const csvDirectory = path.join(process.cwd(), "csv");
  const filenames = await fs.readdir(csvDirectory);
  const csvData = await filenames.map(async (filename) => {
    const filePath = path.join(csvDirectory, filename);
    const fileContents = await fs.readFile(filePath, "utf8");

    // Generally you would parse/transform the contents
    // For example you can transform markdown to HTML here

    return {
      filename,
      content: fileContents,
    };
  });
  // const csvData = await fs.readFile(
  //   path.join(csvDirectory, "temp-2020-2022.csv"),
  //   "utf-8"
  // );

  // var csvData = fs.createReadStream("/csv/temp-2020-2022.csv");
  return { props: { csvData: await Promise.all(csvData) } };
};
