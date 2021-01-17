/** @jsx jsx  */
import { ReactSVG } from "react-svg";
import { jsx } from "theme-ui";
import Button from "../button";
import { motion } from "framer-motion";
import { lineUp } from "../../../helpers/animations";

const TopContent = ({ isDesktop, content, width }) => {
  const { url, button_text } = content;

  return (
    <div
      sx={{
        variant: "pages.product.measure.topcontent",
      }}
    >
      <div className="buttonwrapper">
        <Button text={button_text} />
      </div>

      <div className="graphics">
        {isDesktop ? (
          <motion.svg
            className="graphics__desktop-svg"
            width="624"
            height="49"
            viewBox="0 0 624 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial="initial"
              animate="animate"
              variants={lineUp}
              d="M1.99803 48.0039L1.99803 0.00390632"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <line
              x1="27.3353"
              y1="24.0039"
              x2="27.3353"
              y2="48.0039"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <line
              x1="51.3353"
              y1="24.0039"
              x2="51.3353"
              y2="48.0039"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <line
              x1="75.3353"
              y1="24.0039"
              x2="75.3353"
              y2="48.0039"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <motion.path
              initial="initial"
              animate="animate"
              variants={lineUp}
              d="M97.998 48.0039L97.998 0.00390632"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <line
              x1="123.335"
              y1="24.0039"
              x2="123.335"
              y2="48.0039"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <line
              x1="147.335"
              y1="24.0039"
              x2="147.335"
              y2="48.0039"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <line
              x1="171.335"
              y1="24.0039"
              x2="171.335"
              y2="48.0039"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <line
              x1="195.335"
              y1="24.0039"
              x2="195.335"
              y2="48.0039"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <motion.path
              initial="initial"
              animate="animate"
              variants={lineUp}
              d="M219.331 48.0039 L219.331 0.00390632"
              // x1="219.331"
              // y1="0.00390632"
              // x2="217.998"
              // y2="48.0039"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <line
              x1="243.335"
              y1="24.0039"
              x2="243.335"
              y2="48.0039"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <line
              x1="267.335"
              y1="24.0039"
              x2="267.335"
              y2="48.0039"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <line
              x1="291.335"
              y1="24.0039"
              x2="291.335"
              y2="48.0039"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <line
              x1="315.335"
              y1="24.0039"
              x2="315.335"
              y2="48.0039"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <motion.path
              initial="initial"
              animate="animate"
              variants={lineUp}
              d="M339.331 48.0039 L339.331 0.00390632"
              // x1="339.331"
              // y1="0.00390632"
              // x2="337.998"
              // y2="48.0039"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <line
              x1="363.335"
              y1="24.0039"
              x2="363.335"
              y2="48.0039"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <line
              x1="387.335"
              y1="24.0039"
              x2="387.335"
              y2="48.0039"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <line
              x1="411.335"
              y1="24.0039"
              x2="411.335"
              y2="48.0039"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <line
              x1="435.335"
              y1="24.0039"
              x2="435.335"
              y2="48.0039"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <motion.path
              initial="initial"
              animate="animate"
              variants={lineUp}
              d="M459.331 48.0039 L459.331 0.00390632"
              // x1="459.331"
              // y1="0.00390632"
              // x2="457.998"
              // y2="48.0039"
              stroke="#335AFF"
              strokeWidth="2"
            />

            <line
              x1="483.335"
              y1="24.0039"
              x2="483.335"
              y2="48.0039"
              stroke="#335AFF"
              strokeWidth="2"
            />

            <line
              x1="507.335"
              y1="24.0039"
              x2="507.335"
              y2="48.0039"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <line
              x1="531.335"
              y1="24.0039"
              x2="531.335"
              y2="48.0039"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <line
              x1="555.335"
              y1="24.0039"
              x2="555.335"
              y2="48.0039"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <motion.path
              initial="initial"
              animate="animate"
              variants={lineUp}
              d="M581.331 48.0039 L581.331 0.00390632"
              // x1="581.331"
              // y1="0.00390632"
              // x2="579.998"
              // y2="48.0039"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <line
              x1="605.335"
              y1="24.0039"
              x2="605.335"
              y2="48.0039"
              stroke="#335AFF"
              strokeWidth="2"
            />
          </motion.svg>
        ) : (
          <svg
            className="graphics__mobile-svg"
            width="150"
            height="50"
            viewBox="0 0 150 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1"
              y1="50"
              x2="1"
              y2="0"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <line
              x1="21"
              y1="50"
              x2="21"
              y2="25"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <line
              x1="41"
              y1="50"
              x2="41"
              y2="25"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <line
              x1="60"
              y1="50"
              x2="60"
              y2="25"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <line
              x1="80"
              y1="50"
              x2="80"
              y2="0"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <line
              x1="100"
              y1="50"
              x2="100"
              y2="25"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <line
              x1="120"
              y1="50"
              x2="120"
              y2="25"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <line
              x1="140"
              y1="50"
              x2="140"
              y2="25"
              stroke="#335AFF"
              strokeWidth="2"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default TopContent;
