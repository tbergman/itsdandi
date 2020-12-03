/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";

const Connect = () => {
  return (
    <div
      sx={{
        variant: "pages.product.security.connect",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h2>Connect with confidence</Styled.h2>
          <div className="link">
            <LearnMoreLink
              href="/"
              text={`Learn more about Dandi privacy and security`}
              color="#335AFF"
            />
          </div>
        </div>
        <div className="graphic">
          <ReactSVG src="/assets/svgs/confidencegraphic.svg" />
        </div>
      </div>
    </div>
  );
};

export default Connect;
