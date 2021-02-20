/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import BigLogo from "./bigLogo";
import Graphics from "./graphics";
import Link from "next/link";
import InView from "../inview";
import { rootMargin, scrollToBottom } from "../../helpers/utils";
import { motion } from "framer-motion";

const Home = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  isDesktop,
  content,
}) => {
  const { header, buttonText } = content;
  return (
    <InView
      variant="pages.home.top"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <div
        sx={{
          variant: "grid",
        }}
        className="Top"
      >
        <div className="Top__text">
          <Styled.h1 className="Top__text-header">{header}</Styled.h1>
          {/* <motion.div
            className="Top__text-button"
            onClick={() => scrollToBottom(window, document.body.scrollHeight,isDesktop)}
          >
            <Styled.p className="Top__text-button-text">{buttonText}</Styled.p>
          </motion.div> */}
        </div>

        <Graphics />
      </div>
    </InView>
  );
};

export default Home;
