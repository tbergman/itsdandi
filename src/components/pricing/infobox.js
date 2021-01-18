/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../learnmorelink";

const InfoBox = ({ open, body, url, buttonText }) => {
  return (
    <div className={`Table__body-row-grid-item-infoBox${open ? "-open" : ""}`}>
      <Styled.p className="Table__body-row-grid-item-infoBox-body">
        {body}
      </Styled.p>
      <LearnMoreLink href={url} color="#F9D2FF" text={buttonText} />
    </div>
  );
};

export default InfoBox;
