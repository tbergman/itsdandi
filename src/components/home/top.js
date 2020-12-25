/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import BigLogo from "./bigLogo";
import Graphics from "./graphics";
import Link from "next/link";
import InView from "../inview";
import { rootMargin } from "../../helpers/utils";

const Home = ({ setNavbarStyling, navBarStyling, windowHeight, isDesktop }) => {
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
      >
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

        <Graphics />
      </div>
    </InView>
  );
};

export default Home;
