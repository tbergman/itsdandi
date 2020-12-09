/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import BigLogo from "./bigLogo";
import Graphics from "./graphics";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Home = ({ setNavbarStyling }) => {
  const { inView, entry, ref } = useInView({
    rootMargin: "-94px 0px 0px 0px",
  });

  useEffect(() => {
    if (inView) {
      setNavbarStyling({
        bg: "#1A1A1D",
      });
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      sx={{
        variant: "pages.home.top",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <BigLogo />
        <div className="text">
          <Styled.h1>How business gets better for everyone</Styled.h1>
          <div className="button">
            <Link href="/">
              <a>
                <Styled.p
                  sx={{
                    fontWeight: "500",
                  }}
                >
                  Request a demo
                </Styled.p>
              </a>
            </Link>
          </div>
        </div>
        {/* <div className="spacer"></div> */}
        <Graphics />
      </div>
    </div>
  );
};

export default Home;
