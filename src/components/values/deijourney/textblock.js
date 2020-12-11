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
    </InView>
  );
};

export default TextBlock;
