/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import CarouselMain from "./carouselmain";
import InView from "../inview";
import { rootMargin } from "../../helpers/utils";

const Carousel = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
}) => {
  return (
    <InView
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      variant="pages.home.carousel"
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="toptext">
          <Styled.h2>
            1 million insights. <br />
            And a whole lot more.
          </Styled.h2>
        </div>

        <CarouselMain />
      </div>
    </InView>
  );
};

export default Carousel;
