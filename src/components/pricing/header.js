/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import { lineBreaks, rootMargin } from "../../helpers/utils";
import InView from "../inview";
import { motion } from "framer-motion";
import {
  Header__parent,
  Header__scaleUp,
} from "../../helpers/animations/pricing";

const Header = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  isDesktop,
  isServer,
  content,
}) => {
  const { header, body } = content;
  return (
    <InView
      variant="pages.pricing.header"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h1>{header}</Styled.h1>
          <Styled.h3>{lineBreaks(body)}</Styled.h3>
        </div>

        {!isServer && (
          <motion.div className="graphic">
            <motion.div
              initial="initial"
              animate="animate"
              variants={Header__scaleUp}
              custom={isDesktop}
              className="box1"
            />
            <motion.div
              initial="initial"
              animate="animate"
              variants={Header__scaleUp}
              custom={isDesktop}
              className="box2"
            />
            <motion.div
              initial="initial"
              animate="animate"
              variants={Header__scaleUp}
              custom={isDesktop}
              className="box3"
            />
          </motion.div>
        )}
      </div>
    </InView>
  );
};

export default Header;
