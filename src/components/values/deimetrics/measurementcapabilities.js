/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { lineBreaks, rootMargin, rootMarginSub } from "../../../helpers/utils";
import InView from "../../inview";
import SubInView from "../../subinview";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { globalSlideUp } from "../../../helpers/animations";
import Categories from "../../categories";
import StandardModule from "../../standardmodule";

const MeasurementCapabilities = ({
  windowHeight,
  setNavbarStyling,
  navBarStyling,
  subMenuStyling,
  setSubMenuStyling,
  isDesktop,
  content,
}) => {
  const { categories, header, body } = content;

  return (
    <InView
      variant="pages.values.deimetrics.measurementCapabilities"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <SubInView
        subMenuStyling={subMenuStyling}
        setSubMenuStyling={setSubMenuStyling}
        rootMargin={rootMarginSub(windowHeight)}
      >
        <div
          sx={{
            variant: "grid",
          }}
          className="MeasurementCapabilities"
        >
          <div className="MeasurementCapabilities__row1">
            <Categories categories={categories} />
          </div>
          <div className="MeasurementCapabilities__row2">
            <StandardModule header={header} body={body} />
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default MeasurementCapabilities;
