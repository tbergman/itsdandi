/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InsightsCircle from "./insightscircle";

const Insights = () => {
  return (
    <div
      sx={{
        variant: "pages.product.analyze.insights",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <Styled.h2>
          The insights you’ve needed—and the ones you didn’t know you needed
        </Styled.h2>
        <InsightsCircle />
        <div className="text">
          <Styled.p>
            Compensation data here. Recruitment data there. Retention and
            advancement data...somewhere else. With all your HR data in
            different places, it’s tough to see how it all connects. <br />
            <br />
            Dandi ties it all together, giving you a clearer picture of what
            people in your company actually experience.
            <br />
            <br /> Compensation data can connect with diversity data.
            Recruitment data can connect with attrition data. And as each piece
            of the puzzle comes together, a whole world of new insights opens
            up—over 1 million in total.
          </Styled.p>
        </div>
        <div className="confidence">
          <div className="lockWrapper">
            <ReactSVG src="/assets/svgs/lock.svg" />
          </div>
          <div className="text">
            <Styled.h3>Connect with confidence</Styled.h3>
            <Styled.p>
              With Dandi, your people’s data is protected by best-in-class
              security
            </Styled.p>
            <div className="link">
              <LearnMoreLink
                href="/"
                text={`Learn more about Dandi security.`}
                color="#A4F0F4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;