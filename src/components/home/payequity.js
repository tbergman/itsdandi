/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled, useThemeUI } from "theme-ui";
import LearnMoreLink from "../learnmorelink";
import InView from "../inview";
import { lineBreaks, rootMargin } from "../../helpers/utils";
import { useState } from "react";

const PayEquity = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
  content,
}) => {
  const { header, body, buttonText, desktopImage, mobileImage, url } = content;
  return (
    <InView
      variant="pages.home.payequity"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h2>{header}</Styled.h2>
          <Styled.p>{lineBreaks(body)}</Styled.p>
          <div className="link">
            <LearnMoreLink href={url} text={buttonText} color="#335AFF" />
          </div>
        </div>
        <div className="imagewrapper">
          <img src={desktopImage} alt="" />
          {/* <ReactSVG src="/assets/svgs/crosswalk.svg" /> */}
        </div>
        {/* <div className="bottom"></div> */}
      </div>
    </InView>
  );
};

export default PayEquity;
