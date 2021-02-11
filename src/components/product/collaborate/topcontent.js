/** @jsx jsx */
import { motion } from "framer-motion";
import { jsx } from "theme-ui";
import { TopContent__circle } from "../../../helpers/animations/product/collaborate";
import Button from "../button";

const TopContent = ({ isDesktop, content }) => {
  const { button_text, url } = content;
  return (
    <div
      sx={{
        variant: "pages.product.collaborate.topcontent",
      }}
    >
      <div className="buttonwrapper">
        <Button url={url} text={button_text} isDesktop={isDesktop} />
      </div>
      <div className="graphics">
        {isDesktop ? (
          <motion.svg
            width="499"
            height="290"
            viewBox="0 0 499 290"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial="initial"
              animate="animate"
              variants={TopContent__circle}
              d="M345 290C345 258.076 319.928 233.004 289 233.004C258.072 233.004 233 258.076 233 290"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <motion.path
              initial="initial"
              animate="animate"
              variants={TopContent__circle}
              d="M465 290C465 191.802 386.202 113.004 289 113.004C191.798 113.004 113 191.802 113 290"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <motion.path
              initial="initial"
              animate="animate"
              variants={TopContent__circle}
              d="M577 290C577 129.946 448.058 1.00391 289 1.00391C129.942 1.00391 1 129.946 1 290"
              stroke="#335AFF"
              strokeWidth="2"
            />
          </motion.svg>
        ) : (
          <motion.svg
            width="148"
            height="98"
            viewBox="0 0 148 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial="initial"
              animate="animate"
              variants={TopContent__circle}
              d="M115.06 98C115.06 87.0308 106.762 78.9453 96.5254 78.9453C86.289 78.9453 77.9907 87.0308 77.9907 98"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <motion.path
              initial="initial"
              animate="animate"
              variants={TopContent__circle}
              d="M154.981 98C154.981 64.9821 128.81 39.0234 96.5255 39.0234C64.2413 39.0234 38.0698 64.9821 38.0698 98"
              stroke="#335AFF"
              strokeWidth="2"
            />
            <motion.path
              initial="initial"
              animate="animate"
              variants={TopContent__circle}
              d="M192.05 98C192.05 43.9847 149.282 1.00391 96.5251 1.00391C43.768 1.00391 1 43.9847 1 98"
              stroke="#335AFF"
              strokeWidth="2"
            />
          </motion.svg>
        )}
      </div>
    </div>
  );
};

export default TopContent;
