import { useEffect, useState } from "react";

function AnimatedNumber({ value, duration = 1600 }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out curve
      const easedProgress =
        1 - Math.pow(1 - progress, 4);

      const currentValue = Math.round(
        easedProgress * value
      );

      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [value, duration]);

  return <span>{displayValue}</span>;
}

export default AnimatedNumber;