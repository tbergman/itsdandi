/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../learnmorelink";

const PayEquity = () => {
  return (
    <div
      sx={{
        variant: "pages.home.payequity",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h2>Dandi makes pay equity possible</Styled.h2>
          <Styled.p>
            With sophisticated compensation analytics built right in, Dandi
            helps you find the pay gaps at your company—and make them disappear.{" "}
          </Styled.p>
          <div className="link">
            <LearnMoreLink
              href="/"
              text="Learn how Dandi helps advance pay equity."
              color="#335AFF"
            />
          </div>
        </div>
        <div className="imagewrapper">
          <img src="/assets/images/01_start_Pay equity.png" alt="" />
          {/* <ReactSVG src="/assets/svgs/crosswalk.svg" /> */}
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default PayEquity;
