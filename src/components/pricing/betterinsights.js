/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Table from "./table";
import InView from "../inview";
import { lineBreaks, rootMargin } from "../../helpers/utils";

const BetterInsights = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  isDesktop,
  width,
  content,
}) => {
  const { body, header, head_item1, head_item2, row_data } = content;
  return (
    <InView
      variant="pages.pricing.betterinsights"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
      className="BetterInsights"
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="BetterInsights__toptext">
          <Styled.h2 className="BetterInsights__toptext-heading">
            {header}
          </Styled.h2>
          <Styled.p className="BetterInsights__toptext-body">
            {lineBreaks(body)}
          </Styled.p>
        </div>
        <Table width={width} content={content} />
      </div>
    </InView>
  );
};

export default BetterInsights;
