/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import CarouselMain from "./carouselmain";

const Carousel = () => {
  return (
    <div
      sx={{
        variant: "pages.home.carousel",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="carouselHeader">
          <Styled.h2>
            1 million insights. <br />
            And a whole lot more.
          </Styled.h2>
          <Styled.p>
            On day 1 with Dandi, you’ll unlock more than 1 million new people
            insights, along with powerful capabilities for making sense of it
            all.
          </Styled.p>
        </div>
        <div className="carouselSpacer">
          <div></div>
        </div>
        <CarouselMain />
      </div>
    </div>
  );
};

export default Carousel;
