/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import next from "next";

const SubNavigation = ({ subPages }) => {
  return (
    <div
      sx={{
        variant: "pages.values.subnavigation",
      }}
    >
      <div className="next">
        <div className="secondHalf">
          <ReactSVG src="assets/svgs/arrow.svg" />
          <Styled.h3>
            Next <br />
            {subPages[2]}
          </Styled.h3>
        </div>
      </div>
      <div className="prev">
        <div className="firstHalf">
          <ReactSVG src="assets/svgs/arrow.svg" />
          <Styled.h3>
            Prev <br />
            {subPages[0]}
          </Styled.h3>
        </div>
      </div>
    </div>
  );
};

export default SubNavigation;
