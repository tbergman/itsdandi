/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import BigLogo from "./bigLogo";
import Graphics from "./graphics";
import Link from "next/link";
import InView from "../inview";
import { rootMargin } from "../../helpers/utils";
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
      >
        <div className="text">
          <Styled.h1>{header}</Styled.h1>
          <motion.div className="button">
            <Link href="/">
              <motion.a>
                <Styled.p>{buttonText}</Styled.p>
              </motion.a>
            </Link>
          </motion.div>
        </div>

        <Graphics />
      </div>
    </InView>
  );
};

export default Home;
