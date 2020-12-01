/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const TextBlock = ({ title, sections, styling }) => {
  return (
    <div
      sx={{
        variant: "pages.values.deijourney.textblock",
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
  );
};

export default TextBlock;
