import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Timer } from "lucide-react";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

const TOTAL_SECONDS = 15 * 60;

export function CountdownSection() {
  const [seconds, setSeconds] = useState(TOTAL_SECONDS);

  useEffect(() => {
    if (seconds <= 0) return;
    const id = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [seconds]);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const expired = seconds <= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-5 px-4 flex flex-col items-center gap-3 text-center"
      style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d1a0e 100%)",
        borderTop: "2px solid #ad674b55",
        borderBottom: "2px solid #ad674b55",
      }}
    >
      <div className="flex items-center gap-2">
        <Timer className="w-4 h-4 text-orange-400 animate-pulse" />
        <p className="font-sans font-semibold text-white text-sm tracking-wide uppercase">
          {expired ? "Oferta encerrada!" : "⚡ Oferta por tempo limitado — garanta agora!"}
        </p>
      </div>

      {!expired && (
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-center">
            <span
              className="font-sans font-extrabold text-4xl sm:text-5xl leading-none tabular-nums"
              style={{ color: "#f97316" }}
            >
              {pad(mins)}
            </span>
            <span className="font-sans text-xs text-white/50 uppercase tracking-widest mt-1">min</span>
          </div>

          <span className="font-sans font-bold text-3xl sm:text-4xl pb-4" style={{ color: "#f97316" }}>
            :
          </span>

          <div className="flex flex-col items-center">
            <span
              className="font-sans font-extrabold text-4xl sm:text-5xl leading-none tabular-nums"
              style={{ color: "#f97316" }}
            >
              {pad(secs)}
            </span>
            <span className="font-sans text-xs text-white/50 uppercase tracking-widest mt-1">seg</span>
          </div>
        </div>
      )}

      <p className="font-sans font-light text-white/60 text-xs">
        Após esse tempo, o desconto pode expirar
      </p>
    </motion.div>
  );
}
