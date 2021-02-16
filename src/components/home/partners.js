/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import {
  motion,
  useViewportScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import InView from "../inview";
import theme from "../../../theme";
import { rootMargin } from "../../helpers/utils";
import { useInView } from "react-intersection-observer";
import CarouselRow from "./carouselrow";

const Partners = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
  content,
  isServer,
}) => {
  const { header, logosRow1, logosRow2 } = content;

  return (
    <InView
      variant="pages.home.partners"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <div
        sx={{
          variant: "grid",
        }}
        className="Partners"
      >
        <div className="Partners__text">
          <Styled.h2 className="Partners__text-header">{header}</Styled.h2>
        </div>
        <div className="Partners__logoCarousel">
          {/* <CarouselRow
            key={0}
            logosRow={logosRow1}
            duration={60}
            isServer={isServer}
            additionalClass={`row1`}
          />
          <CarouselRow
            key={1}
            logosRow={logosRow2}
            duration={320}
            isServer={isServer}
            additionalClass={`row2`}
          /> */}
        </div>
      </div>
    </InView>
  );
};

export default Partners;
