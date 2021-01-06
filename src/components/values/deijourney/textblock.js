/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import { rootMargin, rootMarginSub } from "../../../helpers/utils";
import InView from "../../inview";
import SubInView from "../../subinview";

const TextBlock = ({
  content,
  styling,
  setNavbarStyling,
  subMenuStyling,
  setSubMenuStyling,
  navBarStyling,
  windowHeight,
  isDesktop,
}) => {
  const { header, sections } = content;
  return (
    <InView
      variant="pages.values.deijourney.textblock"
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
            ...styling,
          }}
        >
          <div
            className="TextBlock"
            sx={{
              variant: "grid",
            }}
          >
            <Styled.h2 className="TextBlock__header">{header}</Styled.h2>
            <div className="TextBlock__textWrapper">
              {sections.map((section, i) => (
                <div
                  sx={{
                    mb: [3],
                  }}
                  className="TextBlock__textWrapper-section"
                  key={i}
                >
                  <Styled.p className="TextBlock__textWrapper-section-title">
                    {section.title}
                  </Styled.p>
                  <Styled.p className="TextBlock__textWrapper-section-body">
                    {section.body}
                  </Styled.p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default TextBlock;
