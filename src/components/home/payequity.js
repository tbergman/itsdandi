/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Link from "next/link";
import { ReactSVG } from "react-svg";

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
          <Styled.p>
            With sophisticated compensation analytics built right in, Dandi
            helps you find the pay gaps at your company—and make them disappear.{" "}
          </Styled.p>
          <Link href="/">
            <a className="payEquityLink">
              <Styled.p>Learn how Dandi helps advance pay equity</Styled.p>
              <ReactSVG src="/assets/svgs/arrow.svg" />
            </a>
          </Link>
        </div>
        <div className="payEquityGraphic">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PayEquity;
