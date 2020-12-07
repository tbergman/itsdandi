/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import BigLogo from "./bigLogo";
import Graphics from "./graphics";
import Link from "next/link";

const Home = () => {
  return (
    <div
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
