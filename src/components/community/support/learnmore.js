/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";

const LearnMore = () => {
  return (
    <div
      sx={{
        variant: "pages.community.support.learnmore",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="imagewrapper">
          <img src="/assets/images/supportimage.png" alt="" />
        </div>
        <div className="text">
          <Styled.h2>Your partners in change</Styled.h2>
          <Styled.p>
            DEI is a journey. Dandi’s Marketplace Partners are here to help you
            navigate the challenges you meet along the way.
          </Styled.p>
          <div className="link">
            <LearnMoreLink href="/" text={`Learn more`} color="#335AFF" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
