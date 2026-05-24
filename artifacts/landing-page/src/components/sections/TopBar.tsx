import { motion } from "framer-motion";

function getFormattedDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  return `${day}/${month}/${year}`;
}

export function TopBar() {
  const date = getFormattedDate();

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{ backgroundColor: "#C0392B" }}
    >
      <div className="px-4 py-2.5 flex items-center justify-center">
        <motion.p
          animate={{ opacity: [1, 0.75, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="font-sans font-medium text-white text-xs sm:text-sm text-center leading-tight tracking-wide"
        >
          DESCONTO EXCLUSIVO HOJE {date}
        </motion.p>
      </div>
    </motion.div>
  );
}
