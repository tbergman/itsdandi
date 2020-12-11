/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import InView from "../../inview";

const TextBlock = ({
  title,
  sections,
  styling,
  setNavbarStyling,
  navBarStyling,
  windowHeight,
}) => {
  const { theme } = useThemeUI();
  return (
    <InView
      variant="pages.values.deijourney.textblock"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={`0px 0px -${windowHeight - 94}px 0px`}
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
          <Styled.h2>{title}</Styled.h2>
          <div className="text">
            {sections.map((section, i) => (
              <div
                sx={{
                  mb: [3],
                }}
                className="textSection"
                key={i}
              >
                <Styled.p
                  sx={{
                    fontWeight: "500",
                    fontFamily: "medium",
                    lineHeight: "24px",
                  }}
                >
                  {section.title}
                </Styled.p>
                <Styled.p
                  sx={{
                    fontWeight: "400",
                    lineHeight: "24px",
                  }}
                >
                  {section.body}
                </Styled.p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </InView>
  );
};

export default TextBlock;
