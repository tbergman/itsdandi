/** @jsx jsx */
import { jsx } from "theme-ui";
import { motion } from "framer-motion";

const Circles = () => {
  return (
    <svg className="circles" viewBox="0 0 100 100">
      <motion.path
        fill="#F9D2FF"
        d="M0 50
          a50 50 0 0 1 100 0
        "
      />
      <motion.path
        fill="#A4F0F4"
        d="M100 50
        a50 50 0 0 1 -100 0"
      />
      <motion.path
        fill="#FFD93B"
        d="M72.5 50
        a22.5 22.5 0 0 1 -45 0"
      />
      <motion.path
        fill="#335AFF"
        d="M0 50
      a36.25 36.25 0 0 1 72.5 0"
      />
    </svg>
  );
};

export default Circles;
