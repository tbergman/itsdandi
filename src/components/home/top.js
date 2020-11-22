/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import BigLogo from "./bigLogo";
import Header from "./header";
import Bars from "./bars";

const Home = () => {
  return (
    <div
      sx={{
        variant: "pages.home.top",
      }}
    >
      <BigLogo />
      <Header />
      <Bars />
    </div>
  );
};

export default Home;
