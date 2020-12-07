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
        <div className="toptext">
          <Styled.h2>
            1 million insights. <br />
            And a whole lot more.
          </Styled.h2>
        </div>
        <CarouselMain />
      </div>
    </div>
  );
};

export default Carousel;
