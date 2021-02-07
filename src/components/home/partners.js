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
import CarouselRow from './carouselrow'


const Partners = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
  content,
  isServer
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
              <CarouselRow logosRow={logosRow1} duration={45} isServer={isServer} />
              <CarouselRow logosRow={logosRow2} duration={300} isServer={isServer} />
        </div>
      </div>
    </InView>
   );
  }

export default Partners
