import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

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
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full px-4 py-6"
    >
      <div
        className="w-full max-w-lg mx-auto rounded-2xl overflow-hidden"
        style={{
          boxShadow: "0 8px 40px 0 rgba(173,103,75,0.22), 0 2px 8px 0 rgba(0,0,0,0.06)",
        }}
      >
        {/* Header strip */}
        <div
          className="flex items-center justify-center gap-2 px-4 py-3"
          style={{ background: "linear-gradient(135deg, #e8700a, #f59132)" }}
        >
          <Clock className="w-3.5 h-3.5 text-white/90" />
          <p className="font-sans font-semibold text-white text-xs tracking-widest uppercase text-center">
            Oferta promocional por tempo limitado
          </p>
        </div>

        {/* Body */}
        <div
          className="flex flex-col items-center gap-4 px-6 py-7"
          style={{ background: "linear-gradient(180deg, #fff8f4 0%, #fff 100%)" }}
        >
          {expired ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-sans font-bold text-xl tracking-wide"
              style={{ color: "#c0392b" }}
            >
              ⚠ Oferta encerrando
            </motion.p>
          ) : (
            <div className="flex items-center gap-3">
              {/* Minutes */}
              <div className="flex flex-col items-center">
                <motion.div
                  key={mins}
                  initial={{ opacity: 0.6, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center justify-center rounded-xl w-20 h-20 sm:w-24 sm:h-24"
                  style={{
                    background: "linear-gradient(145deg, #fff, #fdf0e8)",
                    border: "1.5px solid #ad674b33",
                    boxShadow: "0 2px 12px rgba(173,103,75,0.12)",
                  }}
                >
                  <span
                    className="font-sans font-extrabold tabular-nums leading-none"
                    style={{ fontSize: "clamp(2rem, 8vw, 2.75rem)", color: "#c0392b" }}
                  >
                    {pad(mins)}
                  </span>
                </motion.div>
                <span className="font-sans text-xs text-muted-foreground mt-1.5 tracking-wider uppercase" style={{ color: "#a0826d" }}>
                  min
                </span>
              </div>

              {/* Separator */}
              <motion.span
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                className="font-sans font-bold pb-5"
                style={{ fontSize: "2rem", color: "#c0392b" }}
              >
                :
              </motion.span>

              {/* Seconds */}
              <div className="flex flex-col items-center">
                <motion.div
                  key={secs}
                  initial={{ opacity: 0.6, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center justify-center rounded-xl w-20 h-20 sm:w-24 sm:h-24"
                  style={{
                    background: "linear-gradient(145deg, #fff, #fdf0e8)",
                    border: "1.5px solid #ad674b33",
                    boxShadow: "0 2px 12px rgba(173,103,75,0.12)",
                  }}
                >
                  <span
                    className="font-sans font-extrabold tabular-nums leading-none"
                    style={{ fontSize: "clamp(2rem, 8vw, 2.75rem)", color: "#c0392b" }}
                  >
                    {pad(secs)}
                  </span>
                </motion.div>
                <span className="font-sans text-xs mt-1.5 tracking-wider uppercase" style={{ color: "#a0826d" }}>
                  seg
                </span>
              </div>
            </div>
          )}

        </div>
      </div>
    </motion.div>
  );
}
