import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";

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
    <SectionWrapper>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto rounded-3xl overflow-hidden"
        style={{
          boxShadow: "0 8px 40px 0 rgba(173,103,75,0.18), 0 2px 12px 0 rgba(0,0,0,0.06)",
          border: "1.5px solid #ad674b33",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-center gap-2 px-6 py-4"
          style={{ background: "linear-gradient(135deg, #ad674b, #c89566)" }}
        >
          <Flame className="w-4 h-4 text-white" />
          <p className="font-sans font-bold text-white text-sm tracking-widest uppercase">
            Oferta por tempo limitado
          </p>
          <Flame className="w-4 h-4 text-white" />
        </div>

        {/* Body */}
        <div
          className="flex flex-col items-center gap-4 px-8 py-8 text-center"
          style={{ background: "linear-gradient(180deg, #fdf8f5 0%, #fff 100%)" }}
        >
          <p className="font-sans font-light text-muted-foreground text-sm">
            Essa oferta expira em:
          </p>

          {expired ? (
            <p className="font-sans font-bold text-lg" style={{ color: "#ad674b" }}>
              Oferta encerrada!
            </p>
          ) : (
            <div className="flex items-center gap-3">
              {/* Minutes */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #1a1a1a, #2d1a0e)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                  }}
                >
                  <span className="font-sans font-extrabold text-4xl tabular-nums" style={{ color: "#f97316" }}>
                    {pad(mins)}
                  </span>
                </div>
                <span className="font-sans text-xs text-muted-foreground uppercase tracking-widest">min</span>
              </div>

              <span className="font-sans font-bold text-3xl pb-6" style={{ color: "#ad674b" }}>:</span>

              {/* Seconds */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #1a1a1a, #2d1a0e)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                  }}
                >
                  <span className="font-sans font-extrabold text-4xl tabular-nums" style={{ color: "#f97316" }}>
                    {pad(secs)}
                  </span>
                </div>
                <span className="font-sans text-xs text-muted-foreground uppercase tracking-widest">seg</span>
              </div>
            </div>
          )}

          <p className="font-sans font-light text-muted-foreground text-xs">
            Após esse tempo, o desconto pode expirar
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
