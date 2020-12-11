/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";

const TextModules = ({ modules }) => {
  return (
    <div
      sx={{
        variant: "pages.values.leadership.textmodules",
      }}
    >
      <div className="wrapper">
        {modules.map((module, i) => (
          <div className="module" key={i}>
            <div className="divider">
              <span />
            </div>
            <Styled.h2>{module.title}</Styled.h2>
            <Styled.p>{module.body}</Styled.p>
            <div className="link">
              <LearnMoreLink
                href={module.linkUrl}
                text={module.linkText}
                color="#335AFF"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextModules;
