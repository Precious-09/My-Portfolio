import { motion } from "framer-motion";

export default function Bounce({ text }) {
  return (
    <div className="App">
      <motion.h1
        animate={{
          y: [0, -20, 0],
          transition: {
            duration: 1,
            repeat: Infinity,
            repeatDelay: 1,
            yoyo: Infinity,
          },
        }}
      >
        {text}
      </motion.h1>
    </div>
  );
}