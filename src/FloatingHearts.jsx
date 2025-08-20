import { useEffect, useState } from "react";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      setHearts((prev) => [...prev, id]);
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h !== id));
      }, 6000);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((id) => {
        const left = Math.random() * 100;
        const duration = 4 + Math.random() * 3;
        const size = 16 + Math.random() * 20;

        return (
          <span
            key={id}
            className="heart"
            style={{
              left: `${left}%`,
              fontSize: `${size}px`,
              animationDuration: `${duration}s`,
            }}
          >
            ❤️
          </span>
        );
      })}
    </div>
  );
};

export default FloatingHearts;
