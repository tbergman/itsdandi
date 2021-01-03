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
            sx={{
              variant: "grid",
              rowGap: 0,
            }}
          >
            <Styled.h2>{header}</Styled.h2>
            <div className="text">
              {sections.map((section, i) => (
                <div
                  sx={{
                    mb: [3],
                  }}
                  className="section"
                  key={i}
                >
                  <Styled.p className="title">{section.title}</Styled.p>
                  <Styled.p className="body">{section.body}</Styled.p>
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
