/** @jsx jsx */
import { jsx } from "theme-ui";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const MobileNav = () => {
  const { scrollYProgress } = useViewportScroll();

  const opacityAnim = useTransform(scrollYProgress, [0, 0.05, 0.1], [0, 0, 1]);

  return (
    <div
      sx={{
        variant: "components.mobilenav",
      }}
    >
      <div className="logo">
        <motion.svg
          style={{
            opacity: opacityAnim,
          }}
          width="32"
          height="27"
          viewBox="0 0 32 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M31.0664 11.2834L31.0664 8.53613L26.6282 8.53613L26.6282 11.2834C26.6282 17.2224 21.7468 22.062 15.5339 22.062C9.32108 22.062 4.43909 17.2229 4.43909 11.2834L4.43909 8.53613L0.00148582 8.53613L0.00148577 11.2834C0.00148559 19.8621 7.10199 26.901 15.5339 26.901C23.9659 26.901 31.0664 19.8621 31.0664 11.2834Z"
            fill="#1A1A1D"
          />
          <motion.path
            d="M24.1873 5.34393L24.1873 0.504883L19.3579 0.504883L19.3579 5.34393L24.1873 5.34393Z"
            fill="#1A1A1D"
          />
          <motion.path
            d="M11.9936 5.34394L11.9936 0.504883L7.16412 0.504883L7.16412 5.34394L11.9936 5.34394Z"
            fill="#1A1A1D"
          />
        </motion.svg>
      </div>

      <div className="hamburger">
        <span
          sx={{
            top: "0",
          }}
        />
        <span
          sx={{
            top: "7px",
          }}
        />
        <span
          sx={{
            top: "14px",
          }}
        />
      </div>
    </div>
  );
};

export default MobileNav;
