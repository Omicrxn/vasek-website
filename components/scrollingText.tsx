const ScrollingText = () => {
  return (
    <>
      <div className="flex overflow-hidden -z-10">
        <div className="flex items-center justify-start whitespace-nowrap transition duration-1000">
          <div className="flex animate-scrollText">
            <h1 className="text-outline font-satoshi text-vasek-extra font-black m-0 transition duration-[2s] ">
              <a>VASEK</a>&nbsp;
              <a>VASEK</a>&nbsp;
              <a>VASEK </a>&nbsp;
              <a>VASEK </a>&nbsp;
              <a>VASEK </a>&nbsp;
            </h1>
            <h1 className="text-outline font-satoshi text-vasek-extra  font-black m-0 transition duration-[2s] ">
              <a>VASEK</a>&nbsp;
              <a>VASEK</a>&nbsp;
              <a>VASEK </a>&nbsp;
              <a>VASEK </a>&nbsp;
              <a>VASEK </a>&nbsp;
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollingText;
