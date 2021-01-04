/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";
import { rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";

const TextModules = ({
  modules,
  setNavbarStyling,
  subMenuStyling,
  setSubMenuStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
}) => {
  return (
    <InView
      variant="pages.values.leadership.textmodules"
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
          <div className="wrapper">
            {modules.map((module, i) => (
              <div className="module" key={i}>
                <div className="divider">
                  <span />
                </div>
                <div className="section1">
                  <Styled.h2>{module.header}</Styled.h2>
                </div>
                <div className="section2">
                  <Styled.p>{module.body}</Styled.p>
                  <div className="linksection">
                    <Styled.p>{module.link_description}</Styled.p>
                    <div className="link">
                      <LearnMoreLink
                        href={module.url}
                        text={module.button_text}
                        color="#335AFF"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default TextModules;
