import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import { useState } from "react";
import ScrollingText from "../components/scrollingText";
import ScrollingTextBg from "../components/scrollingTextBg";
import Landing from "../sections/landing";
const Home: NextPage = () => {
  return (
    <div className="h-screen w-full overflow-hidden m-0 p-0  flex flex-col">
      <Landing />
    </div>
  );
};

export default Home;
