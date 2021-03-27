/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import BigLogo from "./bigLogo";
import Graphics from "./graphics";
import Link from "next/link";
import InView from "../inview";
import { lineBreaks, rootMargin, scrollToBottom } from "../../helpers/utils";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Home = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  isDesktop,
  content,
}) => {
  const { header, buttonText } = content;
  const ref = useRef(null);

  const scrollToText = () => {
    const el = document.getElementById("learnmore");
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

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
          <div
            className="Top__text-button"
            onClick={() => scrollToBottom(window, isDesktop)}
          >
            <Styled.p className="Top__text-button-text">{buttonText}</Styled.p>
          </div>
          <div
            onMouseOver={() => {
              const tl = gsap.timeline();
              tl.to(ref.current, {
                y: 10,
                duration: 0.25,
              });
              tl.to(ref.current, {
                y: 0,
                duration: 0.25,
                // ease: "elastic.out(1, 0.3)",
              });
            }}
            className="Top__learnMore"
            onClick={scrollToText}
          >
            <svg
              ref={ref}
              className="Top__arrow"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8L7 13L2 8"
                stroke="inherit"
                fill="none"
                strokeOpacity="1"
                strokeWidth="1.6"
              />
              <line
                x1="7.00039"
                y1="13"
                x2="7.00039"
                y2="-1.18022e-07"
                stroke="inherit"
                fill="inherit"
                strokeOpacity="1"
                strokeWidth="1.8"
              />
            </svg>
            <Styled.p>Learn more about Dandi</Styled.p>
          </div>
        </div>

        <Graphics />
      </div>
    </InView>
  );
};

export default Home;
