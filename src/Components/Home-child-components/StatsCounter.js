import { useEffect, useState } from "react";

export default function StatsCounter({ value, label }) {
  const [count, setCount] = useState(0);
  const end = parseInt(value.replace("+", ""));

  useEffect(() => {
    let interval;
    let timer;

    const animateCount = () => {
      let start = 0;
      const step = Math.ceil(end / 50); // ~50 steps
      timer = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(start);
      }, 20);
    };

    animateCount(); // Initial animation

    interval = setInterval(() => {
      setCount(0);       // Reset
      clearInterval(timer);
      animateCount();    // Animate again
    }, 50000); // Repeat every 5 seconds

    return () => {
      clearInterval(timer);
      clearInterval(interval);
    };
  }, [end]);

  return (
    <div>
      <h3 className="text-3xl font-bold">{count}+</h3>
      <p className="text-sm mt-1">{label}</p>
    </div>
  );
}
