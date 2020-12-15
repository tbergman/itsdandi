/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import BigLogo from "./bigLogo";
import Graphics from "./graphics";
import Link from "next/link";
import InView from "../inview";

const Home = ({ setNavbarStyling, navBarStyling, windowHeight }) => {
  return (
    <InView
      variant="pages.home.top"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={`0px 0px -${windowHeight - 94}px 0px`}
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
    </InView>
  );
};

export default Home;
