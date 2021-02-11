/** @jsx jsx */
import { motion } from "framer-motion";
import { jsx } from "theme-ui";
import {
  TopContentCircles,
  TopContentLines,
} from "../../../helpers/animations/product/analyze";
import Button from "../button";

const TopContent = ({ isDesktop, content }) => {
  const { button_text, url } = content;
  return (
    <div
      sx={{
        variant: "pages.product.analyze.topcontent",
      }}
    >
      <div className="buttonwrapper">
        <Button url={url} text={button_text} isDesktop={isDesktop} />
      </div>
      <div className="graphics">
        {isDesktop ? (
          <motion.svg
            width="330"
            height="311"
            viewBox="0 0 330 311"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial="initial"
              animate="animate"
              variants={TopContentLines}
              d="M5 310.004  L5 154.004"
              // x1="5"
              // y1="310.004"
              // x2="6"
              // y2="154.004"
              stroke="#FF9133"
              strokeWidth="2"
            />
            <motion.path
              initial="initial"
              animate="animate"
              variants={TopContentLines}
              d="M85 310.004 L85 97.0039"
              // x1="85"
              // y1="310.004"
              // x2="86"
              // y2="97.0039"
              stroke="#FF9133"
              strokeWidth="2"
            />
            <motion.path
              initial="initial"
              animate="animate"
              variants={TopContentLines}
              d="M165 310.004 L165 8.00391"
              // x1="165"
              // y1="310.004"
              // x2="166"
              // y2="8.00391"
              stroke="#FF9133"
              strokeWidth="2"
            />
            <motion.path
              initial="initial"
              animate="animate"
              variants={TopContentLines}
              d="M245 310.004 L245 100"
              // x1="245"
              // y1="310.004"
              // x2="246"
              // y2="100.004"
              stroke="#FF9133"
              strokeWidth="2"
            />
            <motion.path
              initial="initial"
              animate="animate"
              variants={TopContentLines}
              d="M325 310.004 L325 54"
              // x1="325"
              // y1="310.004"
              // x2="326"
              // y2="54.0039"
              stroke="#FF9133"
              strokeWidth="2"
            />
            <motion.circle
              sx={{
                transform: "scale(0)",
              }}
              initial="initial"
              animate="animate"
              variants={TopContentCircles}
              cx="5"
              cy="149.004"
              r="5"
              fill="#FF9133"
            />
            <motion.circle
              sx={{
                transform: "scale(0)",
              }}
              initial="initial"
              animate="animate"
              variants={TopContentCircles}
              cx="85"
              cy="92.0039"
              r="5"
              fill="#FF9133"
            />
            <motion.circle
              sx={{
                transform: "scale(0)",
              }}
              initial="initial"
              animate="animate"
              variants={TopContentCircles}
              cx="165"
              cy="5.00391"
              r="5"
              fill="#FF9133"
            />
            <motion.circle
              sx={{
                transform: "scale(0)",
              }}
              initial="initial"
              animate="animate"
              variants={TopContentCircles}
              cx="245"
              cy="105.004"
              r="5"
              fill="#FF9133"
            />
            <motion.circle
              sx={{
                transform: "scale(0)",
              }}
              initial="initial"
              animate="animate"
              variants={TopContentCircles}
              cx="325"
              cy="55.0039"
              r="5"
              fill="#FF9133"
            />
          </motion.svg>
        ) : (
          <motion.svg
            width="145"
            height="90"
            viewBox="0 0 145 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial="initial"
              animate="animate"
              variants={TopContentLines}
              d="M4 90 L4 39.0039"
              stroke="#FF9133"
              strokeWidth="2"
            />
            <motion.path
              initial="initial"
              animate="animate"
              variants={TopContentLines}
              d="M51 90  L51 16.0039"
              stroke="#FF9133"
              strokeWidth="2"
            />
            <motion.path
              initial="initial"
              animate="animate"
              variants={TopContentLines}
              d="M96 90 L96 7.00391"
              stroke="#FF9133"
              strokeWidth="2"
            />
            <motion.path
              initial="initial"
              animate="animate"
              variants={TopContentLines}
              d="M141 90 L141 8.00391"
              stroke="#FF9133"
              strokeWidth="2"
            />
            <motion.circle
              sx={{
                transform: "scale(0)",
              }}
              initial="initial"
              animate="animate"
              variants={TopContentCircles}
              cx="4"
              cy="37.0039"
              r="4"
              fill="#FF9133"
            />
            <motion.circle
              sx={{
                transform: "scale(0)",
              }}
              initial="initial"
              animate="animate"
              variants={TopContentCircles}
              cx="51"
              cy="15.0039"
              r="4"
              fill="#FF9133"
            />
            <motion.circle
              sx={{
                transform: "scale(0)",
              }}
              initial="initial"
              animate="animate"
              variants={TopContentCircles}
              cx="96"
              cy="4.00391"
              r="4"
              fill="#FF9133"
            />
            <motion.circle
              sx={{
                transform: "scale(0)",
              }}
              initial="initial"
              animate="animate"
              variants={TopContentCircles}
              cx="141"
              cy="11.0039"
              r="4"
              fill="#FF9133"
            />
          </motion.svg>
        )}
      </div>
    </div>
  );
};

export default TopContent;
