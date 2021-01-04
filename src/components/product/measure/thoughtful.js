/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";
import devices from "../../../helpers/devices";
import { lineBreaks, rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";

const Thoughtful = ({
  setNavbarStyling,
  navBarStyling,
  subMenuStyling,
  setSubMenuStyling,
  windowHeight,
  isDesktop,
  content,
}) => {
  const {
    header,
    body_section1,
    body_section2,
    link_description,
    links,
  } = content;
  return (
    <InView
      variant="pages.product.measure.thoughtful"
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
        >
          <div className="section1">
            <Styled.h2>{header}</Styled.h2>
            <Styled.p>{lineBreaks(body_section1)}</Styled.p>
          </div>
          <div className="section2">
            <div className="text">
              <Styled.p>{lineBreaks(body_section2)}</Styled.p>
            </div>
            <div className="team">
              <div className="divider">
                <span />
              </div>
              <div className="header">
                <Styled.p>{link_description}</Styled.p>
              </div>
              <div className="links">
                {links.map((link, i) => (
                  <LearnMoreLink
                    key={i}
                    href={link.url}
                    text={link.button_text}
                    color="#335AFF"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Thoughtful;
