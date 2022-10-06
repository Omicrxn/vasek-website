import { useEffect, useState } from "react";
import { animate } from "framer-motion";

export default function AnimatedCounter({
  title,
  from,
  to,
  round,
  duration,
}: {
  title: string;
  from: number;
  to: number;
  round: Boolean;
  duration: number;
}) {
  const [counter, setCounter] = useState<number>(from);
  useEffect(() => {
    const controls = animate(from, to, {
      duration: duration,
      onUpdate(value) {
        setCounter(value);
      },
    });
    return () => controls.stop();
  }, [from, to]);
  return (
    <div className="bg-vasek-white rounded-lg p-2">
      <h6 className="text-vasek-h6 font-bold font-satoshi text-vasek-purple-500 text-center">
        {title}
      </h6>
      <p className="text-vasek-large font-semibold text-vasek-purple-500 text-center">
        {round ? Math.round(counter) : Math.round(counter * 100) / 100}
      </p>
    </div>
  );
}
