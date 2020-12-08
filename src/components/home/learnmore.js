/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../learnmorelink";
import { useMediaQuery } from "react-responsive";
import devices from "../../helpers/devices";

const LearnMore = () => {
  const isDesktop = useMediaQuery({
    query: devices.desktop,
  });
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
        <div className="toptext">
          <Styled.p>Learn more about Dandi</Styled.p>
          <svg
            width="51"
            height="105"
            viewBox="0 0 51 105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={
                isDesktop
                  ? "M49.4697 88.5352C49.7626 88.8281 50.2374 88.8281 50.5303 88.5352L55.3033 83.7622C55.5962 83.4693 55.5962 82.9945 55.3033 82.7016C55.0104 82.4087 54.5355 82.4087 54.2426 82.7016L50 86.9442L45.7574 82.7016C45.4645 82.4087 44.9896 82.4087 44.6967 82.7016C44.4038 82.9945 44.4038 83.4693 44.6967 83.7622L49.4697 88.5352ZM0 1.75488H30V0.254883H0V1.75488ZM49.25 21.0049V88.0049H50.75V21.0049H49.25ZM30 1.75488C40.6315 1.75488 49.25 10.3734 49.25 21.0049H50.75C50.75 9.54498 41.4599 0.254883 30 0.254883V1.75488Z"
                  : "M44.4697 104.535C44.7626 104.828 45.2374 104.828 45.5303 104.535L50.3033 99.7622C50.5962 99.4693 50.5962 98.9945 50.3033 98.7016C50.0104 98.4087 49.5355 98.4087 49.2426 98.7016L45 102.944L40.7574 98.7016C40.4645 98.4087 39.9896 98.4087 39.6967 98.7016C39.4038 98.9945 39.4038 99.4693 39.6967 99.7622L44.4697 104.535ZM0 1.75488H25V0.254883H0V1.75488ZM44.25 21.0049V104.005H45.75V21.0049H44.25ZM25 1.75488C35.6315 1.75488 44.25 10.3734 44.25 21.0049H45.75C45.75 9.54497 36.4599 0.254883 25 0.254883V1.75488Z"
              }
              fill="black"
            />
          </svg>
        </div>
        <div className="imagewrapper">
          <img src="/assets/images/01_start_computer.png" alt="" />
        </div>
        <div className="text">
          <Styled.h2>
            Dandi is your platform for diversity, equity, and inclusion
          </Styled.h2>

          <div className="link">
            <LearnMoreLink href="/" text="Learn more" color="black" />
          </div>

          {isDesktop ? (
            <Styled.p>
              When DEI advances, everyone wins. But progress has been too slow
              for too long, and employees are tired of waiting. We built Dandi
              for the businesses that are ready to do more. <br />
              <br />
              With Dandi, businesses harness the power of data to advance their
              DEI efforts, faster and smarter than ever before. So today’s DEI
              challenges can finally take their rightful place: In the past.
            </Styled.p>
          ) : (
            <Styled.p>
              When DEI advances, everyone wins. But progress has been too slow
              for too long, and employees are tired of waiting. We built Dandi
              for the businesses that are ready to do more. <br />
              <br />
              With Dandi, businesses harness the power of data to advance their
              DEI efforts, faster and smarter than ever before. So today’s DEI
              challenges can finally take their rightful place: <br />
              <br />
              In the past.
            </Styled.p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
