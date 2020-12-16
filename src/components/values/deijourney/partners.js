/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled, useThemeUI } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";

const Partners = ({ setNavbarStyling, windowHeight, navBarStyling }) => {
  const { theme } = useThemeUI();
  return (
    <InView
      variant="pages.values.deijourney.partners"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={`0px 0px -${windowHeight - 94}px 0px`}
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
    </InView>
  );
};

export default Partners;
