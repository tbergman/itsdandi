/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";

const TextModules = ({
  modules,
  setNavbarStyling,
  windowHeight,
  navBarStyling,
}) => {
  const { theme } = useThemeUI();
  return (
    <InView
      variant="pages.values.leadership.textmodules"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={`0px 0px -${windowHeight - 94}px 0px`}
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
                <div className="link">
                  <LearnMoreLink
                    href={module.linkUrl}
                    text={module.linkText}
                    color="#335AFF"
                  />
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
