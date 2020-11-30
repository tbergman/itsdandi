/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";

const SubNavigation = ({ subPages }) => {
  return (
    <div
      sx={{
        variant: "pages.values.subnavigation",
      }}
    >
      <div className="next">
        <div className="half">
          <ReactSVG src="assets/svgs/arrow.svg" />
          <Styled.h3>{subPages[1]}</Styled.h3>
        </div>
      </div>
      <div className="prev">{subPages[0]}</div>
    </div>
  );
};

export default SubNavigation;
