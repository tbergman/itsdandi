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
  width,
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
          <CarouselRow
            key={0}
            logosRow={[...logosRow1, ...logosRow1]}
            duration={30}
            isServer={isServer}
            width={width}
          />
          <CarouselRow
            key={1}
            logosRow={[...logosRow2, ...logosRow2]}
            duration={40}
            isServer={isServer}
            width={width}
          />
        </div>
      </div>
    </InView>
  );
};

export default Partners;
