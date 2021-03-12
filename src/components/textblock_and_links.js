/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { lineBreaks } from "../helpers/utils";
import LearnMoreLink from "./learnmorelink";

const TextBlockAndLinks = ({ content }) => {
  const { body_section1, body_section2, link_description, links } = content;
  return (
    <div
      sx={{
        variant: "components.textBlockAndLinks",
      }}
      className="TextBlock"
    >
      <div className="TextBlock__section1">
        <div className="TextBlock__body slideUp">
          <Styled.p className="TextBlock__bodyText">
            {lineBreaks(body_section1)}
          </Styled.p>
        </div>
      </div>
      <div className="TextBlock__section2">
        <div className="TextBlock__body slideUp">
          <Styled.p className="TextBlock__bodyText">
            {lineBreaks(body_section2)}
          </Styled.p>
        </div>
        <div className="TextBlock__team slideUp">
          <div className="TextBlock__divider">
            <span />
          </div>
          <div className="TextBlock__teamHeader">
            <Styled.p className="TextBlock__teamHeadertext">
              {link_description}
            </Styled.p>
          </div>
          <div className="TextBlock__links">
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
  );
};

export default TextBlockAndLinks;
