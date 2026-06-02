import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";

const purchases = [
  { name: "Mariana S.", city: "São Paulo, SP", plan: "Plano Premium" },
  { name: "Fernanda L.", city: "Rio de Janeiro, RJ", plan: "Plano Premium" },
  { name: "Camila R.", city: "Belo Horizonte, MG", plan: "Plano Básico" },
  { name: "Juliana M.", city: "Curitiba, PR", plan: "Plano Premium" },
  { name: "Ana Paula T.", city: "Fortaleza, CE", plan: "Plano Premium" },
  { name: "Beatriz C.", city: "Salvador, BA", plan: "Plano Básico" },
  { name: "Larissa O.", city: "Porto Alegre, RS", plan: "Plano Premium" },
  { name: "Renata F.", city: "Recife, PE", plan: "Plano Premium" },
  { name: "Patrícia N.", city: "Goiânia, GO", plan: "Plano Básico" },
  { name: "Thaís B.", city: "Manaus, AM", plan: "Plano Premium" },
  { name: "Isabela D.", city: "Campinas, SP", plan: "Plano Premium" },
  { name: "Vanessa K.", city: "Florianópolis, SC", plan: "Plano Básico" },
  { name: "Aline P.", city: "Natal, RN", plan: "Plano Premium" },
  { name: "Priscila G.", city: "Belém, PA", plan: "Plano Premium" },
  { name: "Gabriela H.", city: "São Luís, MA", plan: "Plano Básico" },
];

function timeAgo() {
  const minutes = Math.floor(Math.random() * 25) + 1;
  if (minutes === 1) return "há 1 minuto";
  return `há ${minutes} minutos`;
}

export function PurchaseNotification() {
  const [current, setCurrent] = useState<{ name: string; city: string; plan: string; time: string } | null>(null);
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const shuffled = [...purchases].sort(() => Math.random() - 0.5);

    const show = (i: number) => {
      const entry = shuffled[i % shuffled.length];
      setCurrent({ ...entry, time: timeAgo() });
      setVisible(true);

      const hideTimer = setTimeout(() => setVisible(false), 4500);
      return hideTimer;
    };

    const initialDelay = setTimeout(() => {
      const hideTimer = show(index);

      const interval = setInterval(() => {
        clearTimeout(hideTimer);
        setIndex((prev) => {
          const next = prev + 1;
          show(next);
          return next;
        });
      }, 9000);

      return () => {
        clearInterval(interval);
      };
    }, 5000);

    return () => clearTimeout(initialDelay);
  }, []);

  return (
    <div className="fixed bottom-5 left-4 z-50 max-w-[280px]">
      <AnimatePresence>
        {visible && current && (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -30, y: 10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl shadow-xl"
            style={{
              background: "#fff",
              border: "1.5px solid #ad674b22",
              boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
            }}
          >
            <div
              className="w-9 h-9 shrink-0 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #ad674b18, #4a8e5818)" }}
            >
              <ShoppingBag className="w-4 h-4" style={{ color: "#ad674b" }} />
            </div>
            <div className="flex flex-col gap-0.5 min-w-0">
              <p className="font-sans font-semibold text-foreground text-xs leading-tight truncate">
                {current.name} de {current.city}
              </p>
              <p className="font-sans font-light text-muted-foreground text-[11px] leading-tight">
                acabou de comprar o <span className="font-medium" style={{ color: "#ad674b" }}>{current.plan}</span>
              </p>
              <p className="font-sans text-[10px] text-muted-foreground/70">{current.time}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
