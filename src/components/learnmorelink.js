/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { motion } from "framer-motion";

const LearnMoreLink = ({ href, text, color }) => {
  const arrowMotion = {
    initial: {
      opacity: 1,
    },
    hover: {
      x: 10,
    },
  };

  return (
    <Link href={href}>
      <motion.a
        initial="inital"
        whileHover="hover"
        animate="initial"
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

        <motion.div variants={arrowMotion}>
          <ReactSVG
            sx={{
              div: {
                display: "flex",
                alignItems: "center",
                svg: {
                  g: {
                    path: {
                      stroke: color,
                    },
                    line: {
                      stroke: color,
                    },
                  },
                },
              },
            }}
            src="/assets/svgs/arrow.svg"
          />
        </motion.div>
      </motion.a>
    </Link>
  );
};

export default LearnMoreLink;
