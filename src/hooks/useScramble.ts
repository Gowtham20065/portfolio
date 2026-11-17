import { useState, useEffect, useCallback } from 'react';

const GLYPHS = "0123456789ABCDEF_<>{}/*=";

export function useScramble(text: string) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  const scramble = useCallback(() => {
    if (isScrambling) return;
    setIsScrambling(true);
    let iteration = 0;
    const maxIterations = text.length * 2;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration / 2) return text[index];
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("")
      );

      iteration += 1;
      if (iteration > maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsScrambling(false);
      }
    }, 25);
  }, [text, isScrambling]);

  useEffect(() => {
    // Initial reveal scramble
    scramble();
  }, []);

  return { displayText, scramble, isScrambling };
}
