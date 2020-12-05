/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";

const Curious = () => {
  return (
    <div
      sx={{
        variant: "pages.community.partners.curious",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="toptext">
          <Styled.h2>Make our Partners yours</Styled.h2>
          <Styled.p>
            Curious about working with a Dandi Marketplace Partner? Contact us
            at marketplace@itsdandi.com.
            <br />
            <br /> We’re happy to connect you to our partners, even if you’re
            not a Dandi client.
          </Styled.p>
        </div>
        <div className="bottomtext">
          <Styled.h2>The Dandi DEI Advisory Board</Styled.h2>
          <Styled.p>
            A collective of leading thinkers and change-makers, Dandi’s DEI
            Advisory Board plays a critical role in shaping our platform.
          </Styled.p>
          <div className="link">
            <LearnMoreLink href="/" text={`Learn more`} color="#335AFF" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curious;
