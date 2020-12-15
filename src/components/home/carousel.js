/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import CarouselMain from "./carouselmain";
import InView from "../inview";

const Carousel = ({ setNavbarStyling, windowHeight, navBarStyling }) => {
  return (
    <InView
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      variant="pages.home.carousel"
      rootMargin={`0px 0px  -${windowHeight - 94}px 0px`}
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
