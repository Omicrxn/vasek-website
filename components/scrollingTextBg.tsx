import ScrollingText from "./scrollingText";

const ScrollingTextBg = () => {
  return (
    <div className="absolute top-0 left-0 flex flex-col  -rotate-[20deg] -translate-y-[20%] md:translate-x-[-10%] translate-x-[-30%] w-[160%] overflow-hidden">
      <ScrollingText />
      <ScrollingText />
      <ScrollingText />
      <ScrollingText />
      <ScrollingText />
    </div>
  );
};

export default ScrollingTextBg;
