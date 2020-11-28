/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Link from "next/link";
import { ReactSVG } from "react-svg";

const LearnMoreLink = ({ href, text, color }) => {
  return (
    <Link href={href}>
      <a
        sx={{
          variant: "components.learnMoreLink",
        }}
      >
        <Styled.p
          sx={{
            color: color,
          }}
        >
          {text}
        </Styled.p>
        <ReactSVG
          sx={{
            div: {
              display: "flex",
              alignItems: "center",
              svg: {
                g: {
                  path: {
                    stroke: color,
                  },
                  line: {
                    stroke: color,
                  },
                },
              },
            },
          }}
          src="/assets/svgs/arrow.svg"
        />
      </a>
    </Link>
  );
};

export default LearnMoreLink;
