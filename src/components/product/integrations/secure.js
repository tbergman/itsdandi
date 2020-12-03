/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";

const Secure = () => {
  return (
    <div
      sx={{
        variant: "pages.product.integrations.secure",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h2>Secure by design</Styled.h2>
          <Styled.p>Protecting your people data is our top priority.</Styled.p>
          <div className="link">
            <LearnMoreLink
              href="/"
              text={`Learn more about Dandi privacy and security`}
              color="#335AFF"
            />
          </div>
        </div>
        <div className="graphic">
          <ReactSVG src="/assets/svgs/biglock.svg" />
        </div>
      </div>
    </div>
  );
};

export default Secure;
