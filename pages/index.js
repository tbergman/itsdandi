/** @jsx jsx */
import { jsx } from "theme-ui";
import Navigation from "../src/components/navigation";
import Footer from "../src/components/footer";

import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";

const Home = () => {
  const { scrollYProgress } = useViewportScroll();
  const svgVariant = {};
  const pathVariant = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <div
      sx={{
        variant: "wrapper",
      }}
    >
      <Navigation />
      <motion.div
        sx={{
          m: "auto",
          p: "100px",
          position: "sticky",
        }}
      >
        <motion.svg
          sx={{
            stroke: "white",
            strokeWidth: 1,
          }}
          width="145"
          height="487"
          viewBox="0 0 145 487"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={pathVariant}
            initial="hidden"
            animate="visible"
            d="M73.2821 140.143C73.2821 140.143 100.938 143.571 102.203 177.4C103.103 201.511 89.2714 217.612 65.6951 217.612L2.82174 217.612L2.82174 197.508L12.9635 197.508C12.9635 197.508 0.795987 186.449 0.795988 168.354C0.795989 148.247 14.9944 134.175 29.1902 134.175C45.4169 134.175 57.1792 144.661 59.6127 162.322C61.574 176.556 63.7287 197.935 71.3621 197.935C81.2406 197.935 86.9772 191.55 86.9772 178.684C86.9772 178.684 87.114 161.99 73.2847 158.135L73.2847 140.143L73.2821 140.143ZM47.4427 197.508L53.5174 197.508C54.0644 197.508 54.3896 196.886 54.0567 196.456C49.1742 190.125 46.7769 175.167 44.4002 166.341C42.346 158.713 38.3151 154.279 31.2159 154.279C25.1309 154.279 19.0459 160.312 19.0459 171.368C19.0459 187.454 29.1876 197.508 47.4427 197.508Z"
            fill="none"
          />
          <motion.path
            variants={pathVariant}
            initial="hidden"
            animate="visible"
            d="M88.3312 259.383C87.6809 259.383 87.4099 260.209 87.939 260.583C92.1944 263.584 102.207 272.363 102.207 288.536C102.207 311.657 85.9803 326.415 59.6145 326.415L2.82608 326.415L2.82608 306.31L59.6145 306.31C73.8128 306.31 83.952 298.907 83.952 285.84C83.952 270.762 73.8103 259.383 52.5153 259.383L2.82608 259.383L2.82608 239.276L100.179 239.276L100.179 259.383L88.3312 259.383Z"
            fill="none"
          />
          <motion.path
            variants={pathVariant}
            initial="hidden"
            animate="visible"
            d="M83.9569 419.466L144.797 419.466L144.797 439.573L2.82325 439.573L2.82325 419.466L16.7094 419.466C17.3675 419.466 17.6307 418.627 17.0887 418.258C12.3843 415.071 0.797497 405.477 0.797498 388.304C0.797499 363.173 23.1067 342.38 51.5009 342.38C79.8951 342.38 102.204 363.17 102.204 388.304C102.204 407.324 89.7478 415.401 83.6757 418.207C83.0253 418.504 83.2421 419.466 83.9569 419.466ZM51.4983 419.466C69.7508 419.466 83.9492 405.39 83.9492 390.313C83.9492 375.235 69.7508 362.485 51.4983 362.485C33.2458 362.485 19.0474 375.235 19.0474 390.313C19.0474 405.393 33.2458 419.466 51.4983 419.466Z"
            fill="none"
          />
          <motion.path
            variants={pathVariant}
            initial="hidden"
            animate="visible"
            d="M2.82336 486.055L2.82336 465.95L100.176 465.95L100.176 486.055L2.82336 486.055ZM116.065 486.055L116.065 465.95L136.539 465.95L136.539 486.055L116.065 486.055Z"
            fill="none"
          />
          <motion.path
            variants={pathVariant}
            initial="hidden"
            animate="visible"
            d="M144.797 49.2613L144.797 36.7057L124.513 36.7057L124.513 49.2613C124.513 76.4036 102.204 98.5217 73.8101 98.5217C45.4159 98.5217 23.1042 76.4062 23.1042 49.2613L23.1042 36.7057L2.82336 36.7057L2.82336 49.2613C2.82336 88.468 35.2742 120.637 73.8101 120.637C112.346 120.637 144.797 88.468 144.797 49.2613Z"
            fill="none"
          />
          <motion.path
            variants={pathVariant}
            initial="hidden"
            animate="visible"
            d="M113.357 22.1155L113.357 0L91.2856 -6.32325e-07L91.2856 22.1155L113.357 22.1155Z"
            fill="none"
          />
          <motion.path
            variants={pathVariant}
            initial="hidden"
            animate="visible"
            d="M57.6289 22.1155L57.6289 0L35.5571 -5.98254e-07L35.5571 22.1155L57.6289 22.1155Z"
            fill="none"
          />
        </motion.svg>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Home;
