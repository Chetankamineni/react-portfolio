"use client";

import { useState, useEffect } from "react";

export const Hero = () => {
  const words = ["Fantastic", "Amazing", "Stunning"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          I'm Chetan, a Full Stack dev building{" "}
          <span className="text-purple-400 transition-all duration-300">
            {words[currentWordIndex]}
          </span>{" "}
          websites using React
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-400">
          Hyderabad, India - UTC/GMT +5:30
        </p>
      </div>
    </section>
  );
};