/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Link from "next/link";

const Button = ({ url, text }) => {
  return (
    <div
      sx={{
        variant: "components.shared.button",
      }}
    >
      <Link href={url}>
        <a className="button">
          <Styled.p>{text}</Styled.p>
        </a>
      </Link>
    </div>
  );
};

export default Button;
