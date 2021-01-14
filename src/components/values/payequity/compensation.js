/** @jsx jsx  */
import { jsx, Styled } from "theme-ui";
import CompensationGraph from "./compensationgraph";
import InView from "../../inview";
import { rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";
import CompensationSvg from "./compensationsvg";

const Compensation = ({
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  setSubMenuStyling,
  subMenuStyling,
  content,
  isDesktop,
  isServer,
}) => {
  const {
    header,
    body_section1,
    body_section2,
    desktop_image,
    mobile_image,
  } = content;

  return (
    <InView
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      variant="pages.values.payequity.compensation"
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
            rowGap: 0,
          }}
        >
          <div className="top">
            <Styled.h2>{header}</Styled.h2>
            <div className="body">
              <div className="section1">
                <Styled.p>{body_section1}</Styled.p>
              </div>
              <div className="section2">
                <Styled.p>{body_section2}</Styled.p>
              </div>
            </div>
            {!isServer && <CompensationSvg isDesktop={isDesktop} />}
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Compensation;
