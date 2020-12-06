/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../learnmorelink";

const LearnMore = () => {
  return (
    <div
      sx={{
        variant: "pages.home.learnmore",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="learnMoreText">
          <Styled.p
            sx={{
              fontFamily: "display",
              fontWeight: "500",
            }}
          >
            Learn more about Dandi
          </Styled.p>
          <svg
            width="51"
            height="105"
            viewBox="0 0 51 105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44.4697 104.535C44.7626 104.828 45.2374 104.828 45.5303 104.535L50.3033 99.7622C50.5962 99.4693 50.5962 98.9945 50.3033 98.7016C50.0104 98.4087 49.5355 98.4087 49.2426 98.7016L45 102.944L40.7574 98.7016C40.4645 98.4087 39.9896 98.4087 39.6967 98.7016C39.4038 98.9945 39.4038 99.4693 39.6967 99.7622L44.4697 104.535ZM0 1.75488H25V0.254883H0V1.75488ZM44.25 21.0049V104.005H45.75V21.0049H44.25ZM25 1.75488C35.6315 1.75488 44.25 10.3734 44.25 21.0049H45.75C45.75 9.54497 36.4599 0.254883 25 0.254883V1.75488Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="imagewrapper">
          <img src="/assets/images/computerdash.png" alt="" />
        </div>
        <div className="text">
          <Styled.h2>
            Dandi is your platform for diversity, equity, and inclusion
          </Styled.h2>
          <div className="link">
            <LearnMoreLink href="/" text="Learn more" color="black" />
          </div>
          <Styled.p>
            When DEI advances, everyone wins. But progress has been too slow for
            too long, and employees are tired of waiting. We built Dandi for the
            businesses that are ready to do more. <br />
            <br />
            With Dandi, businesses harness the power of data to advance their
            DEI efforts, faster and smarter than ever before. So today’s DEI
            challenges can finally take their rightful place: <br />
            <br />
            In the past.
          </Styled.p>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
