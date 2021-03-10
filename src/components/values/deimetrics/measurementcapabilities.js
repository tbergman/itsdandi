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

const MeasurementCapabilities = ({ content }) => {
  const { categories, header, body } = content;

  return (
    <div
      sx={{
        variant: "pages.values.deimetrics.measurementCapabilities",
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
  );
};

export default MeasurementCapabilities;
