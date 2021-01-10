/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { motion } from "framer-motion";

const LearnMoreLink = ({ href, text, color }) => {
  const arrowMotion = {
    hover: {
      x: 10,
      transition: {
        ease: "easeOut",
        duration: 0.175,
        type: "tween",
      },
    },
  };

  return (
    <Link href={href}>
      <motion.a
        whileHover="hover"
        sx={{
          variant: "components.learnMoreLink",
        }}
      >
        <Styled.p
          sx={{
            color: color,
          }}
        >
          {text}
        </Styled.p>

        <motion.div className="arrow" variants={arrowMotion}>
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 3.00464L14 8.00464L9 13.0046"
              stroke={color}
              strokeWidth="1.6"
            />
            <line
              x1="14"
              y1="8.00425"
              x2="1"
              y2="8.00425"
              stroke={color}
              strokeWidth="1.8"
            />
          </svg>
        </motion.div>
      </motion.a>
    </Link>
  );
};

export default LearnMoreLink;
