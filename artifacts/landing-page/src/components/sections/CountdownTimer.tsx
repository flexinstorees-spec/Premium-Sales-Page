import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TOTAL_SECONDS = 15 * 60;

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function CountdownTimer() {
  const [seconds, setSeconds] = useState(TOTAL_SECONDS);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          setExpired(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full flex justify-center px-4 py-6"
    >
      <div
        className="w-full max-w-sm flex flex-col items-center gap-3 px-6 py-5 rounded-2xl"
        style={{
          background: "#fdf8f5",
          border: "1px solid #ad674b22",
          boxShadow: "0 4px 20px 0 rgba(173,103,75,0.10)",
        }}
      >
        <p
          className="font-sans text-xs font-medium tracking-widest uppercase text-center"
          style={{ color: "#a0826d" }}
        >
          Oferta promocional disponível por tempo limitado
        </p>

        {expired ? (
          <p
            className="font-sans font-semibold text-base"
            style={{ color: "#c0392b" }}
          >
            Oferta encerrando
          </p>
        ) : (
          <motion.p
            key={seconds}
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="font-sans font-bold tabular-nums"
            style={{
              fontSize: "clamp(2.2rem, 10vw, 3rem)",
              letterSpacing: "0.08em",
              color: "#c0392b",
              lineHeight: 1,
            }}
          >
            {pad(mins)}:{pad(secs)}
          </motion.p>
        )}

        <p
          className="font-sans font-light text-xs text-center"
          style={{ color: "#b0907a" }}
        >
          Esse valor promocional pode sair do ar a qualquer momento.
        </p>
      </div>
    </motion.div>
  );
}
