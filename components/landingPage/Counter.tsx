"use client";
import CountUp from "react-countup";

const Counter = ({ end, suffix, duration }: CounterProps) => {
  return <CountUp end={end} duration={duration} suffix={suffix} />;
};

export default Counter;
