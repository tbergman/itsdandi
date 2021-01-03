/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { lineBreaks, rootMargin, rootMarginSub } from "../../../helpers/utils";
import InView from "../../inview";
import SubInView from "../../subinview";

const Reports = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  setSubMenuStyling,
  subMenuStyling,
  isDesktop,
  content,
}) => {
  const { header, body_section1, body_section2 } = content;
  return (
    <InView
      variant="pages.values.payequity.reports"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <SubInView
        setSubMenuStyling={setSubMenuStyling}
        subMenuStyling={subMenuStyling}
        rootMargin={rootMarginSub(windowHeight)}
      >
        <div
          sx={{
            variant: "grid",
          }}
        >
          <div className="text">
            <div className="heading">
              <Styled.h2>{header}</Styled.h2>
            </div>

            <div className="body">
              <div className="section1">
                <Styled.p>{lineBreaks(body_section1)}</Styled.p>
              </div>
              <div className="section2">
                <Styled.p>{lineBreaks(body_section2)}</Styled.p>
              </div>
            </div>
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Reports;
