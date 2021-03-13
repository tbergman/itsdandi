/** @jsx jsx */
import { jsx } from "theme-ui";
import LearnMoreLink from "./learnmorelink";

const LinkList = ({ links }) => {
  return (
    <div
      sx={{
        mt: [2],
        display: "flex",
        flexFlow: "column",
      }}
    >
      {links.map((link, i) => (
        <LearnMoreLink
          key={i}
          href={link.url}
          text={link.text}
          color="#335AFF"
        />
      ))}
    </div>
  );
};

export default LinkList;
