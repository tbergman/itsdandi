/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";

const Partners = () => {
  return (
    <div
      sx={{
        variant: "pages.values.deijourney.partners",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="graphic">
          <ReactSVG src="/assets/svgs/deijourneypartnersGraphic.svg" />
        </div>
        <div className="text">
          <Styled.h2>Partners in transformation</Styled.h2>
          <Styled.p>
            Dandi’s Marketplace Partners are here to help you navigate the
            challenges you meet along the way.
          </Styled.p>
          <div className="partnersLink">
            <LearnMoreLink href="/" text="Learn more" color="#335AFF" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
