import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import { useState } from "react";
import ScrollingText from "../components/scrollingText";
import ScrollingTextBg from "../components/scrollingTextBg";
import Landing from "../sections/home/landing";
import TemComp from "../components/temComp";
import Discover from "../sections/home/discover";
import BrandValues from "../sections/home/brandValues";
import Newsletter from "../sections/home/newsletter";
const Home: NextPage = () => {
  return (
    <div className="w-full overflow-hidden m-0 p-0 bg-vasek-black">
      
      <Landing />
      <Discover/>
      <BrandValues/>
      <Newsletter/>
    </div>
  );
};

export default Home;
