/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import BigLogo from "./bigLogo";
import Header from "./header";
import Graphics from "./graphics";

const Home = () => {
  return (
    <div
      sx={{
        variant: "pages.home.top",
      }}
    >
      <BigLogo />
      <Header />
      <div className="spacer"></div>
      <Graphics />
    </div>
  );
};

export default Home;
