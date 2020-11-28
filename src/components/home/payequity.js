/** @jsx jsx */
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
        <div className="payEquityHeader">
          <Styled.h2>Dandi makes pay equity possible</Styled.h2>
          <Styled.p className="payEquityBody">
            With sophisticated compensation analytics built right in, Dandi
            helps you find the pay gaps at your company—and make them disappear.{" "}
          </Styled.p>
          <div
            sx={{
              mt: "20px",
            }}
          >
            <LearnMoreLink
              href="/"
              text="Learn how Dandi helps advance pay equity."
              color="#335AFF"
            />
          </div>
        </div>
        <div className="payEquityGraphic">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PayEquity;
