/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import CarouselMain from "./carouselmain";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import theme from "../../../theme";

const Carousel = ({ setNavbarStyling, windowHeight }) => {
  const ctx = useThemeUI();
  const { inView, ref, entry } = useInView({
    rootMargin: `0px 0px  -${windowHeight - 94}px 0px`,
  });
  const { theme } = ctx;

  useEffect(() => {
    if (inView) {
      setNavbarStyling({ ...theme.components.navigation.default });
    }
  }, [inView]);

  return (
    <div
      ref={ref}
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
