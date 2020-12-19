/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";
import { rootMargin } from "../../../helpers/utils";

const TextModules = ({
  modules,
  setNavbarStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
}) => {
  const { theme } = useThemeUI();
  return (
    <InView
      variant="pages.values.leadership.textmodules"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
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
                <Styled.h2>{module.title}</Styled.h2>
              </div>
              <div className="section2">
                <Styled.p>{module.body}</Styled.p>
                <div className="linksection">
                  <Styled.p>{module.bottomText}</Styled.p>
                  <div className="link">
                    <LearnMoreLink
                      href={module.linkUrl}
                      text={module.linkText}
                      color="#335AFF"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </InView>
  );
};

export default TextModules;
