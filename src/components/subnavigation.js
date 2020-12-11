/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import Link from "next/link";

const SubNavigation = ({ next, prev }) => {
  return (
    <div
      sx={{
        variant: "pages.values.subnavigation",
      }}
    >
      {prev && (
        <div
          sx={{
            bg: prev.bg ? prev.bg : "black",
          }}
          className="prev"
        >
          <Link href={prev.url}>
            <a className="link">
              <ReactSVG className="rotated" src="/assets/svgs/arrow.svg" />
              <Styled.h3>
                Prev <br />
                {prev.name}
              </Styled.h3>
            </a>
          </Link>
        </div>
      )}
      <div
        sx={{
          bg: next.bg ? next.bg : "black",
        }}
        className={prev ? "next" : "next full"}
      >
        <Link href={next.url}>
          <a className="link">
            <ReactSVG src="/assets/svgs/arrow.svg" />
            <Styled.h3>
              {next.goBack ? "Back to top" : "Next"} <br />
              {next.name}
            </Styled.h3>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SubNavigation;
