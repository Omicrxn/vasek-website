import AnimatedCounter from "../../components/animatedCounter";

export default function Discover() {
  return (
    <div className="md:container relative flex flex-col justify-center items-center self-center md:mx-auto mx-4 md:w-3/4 md:text-center gap-12 mt-16 mb-32">
      <div className="flex flex-col gap-y-5">
        <h3 className="text-vasek-h3 font-bold text-vasek-white font-satoshi">
          Descubre el método Vasek
        </h3>
        <p className="md:text-vasek-large text-vasek-medium text-vasek-white">
          El método Vasek es una estrategia de trading de cuotas en sucesos
          deportivos que confecciona una serie fórmulas matemáticas para obtener
          un rendimiento en cada una de las operaciones
        </p>
      </div>

      <div className="flex md:gap-x-12 gap-y-12 md:gap-y-0 flex-col md:flex-row">
        <div className="flex md:gap-x-12 gap-x-6">
        <AnimatedCounter title="Operaciones" from={0} to={171} round duration={8}/>
        <AnimatedCounter title="Aciertos (%)" from={0} to={92.98} round={false} duration={8}/>
        </div>

        <AnimatedCounter title="Yield (%)" from={0} to={15.87}  round ={false} duration={8}/>
        
      </div>
    </div>
  );
}

function animatedCounter(target: number, time = 200, start = 0) {
  return {
    current: 0,
    target: target,
    time: time,
    start: start,
    updatecounter: function () {
      start = this.start;
      const increment = (this.target - start) / this.time;
      const handle = setInterval(() => {
        if (this.current < this.target) this.current += increment;
        else {
          clearInterval(handle);
          this.current = this.target;
        }
      }, 1);
    },
  };
}
