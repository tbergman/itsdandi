/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Link from "next/link";

const Button = () => {
  return (
    <div
      sx={{
        variant: "pages.home.top.header.button",
      }}
    >
      <Link href="/">
        <a>
          <Styled.p
            sx={{
              fontWeight: "500",
            }}
          >
            Request a demo
          </Styled.p>
        </a>
      </Link>
    </div>
  );
};

export default Button;
