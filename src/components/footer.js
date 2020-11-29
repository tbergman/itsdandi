/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import Form from "./form";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      sx={{
        variant: "components.footer",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="footerHeader">
          <Styled.h2>Take Dandi for a test drive</Styled.h2>
          <Styled.p>
            Because there’s only one place for today’s DEI challenges: <br />
            <br />
            The past.
          </Styled.p>
        </div>

        {/* <Form />
        <div className="socials"></div>
        <Link href="/">
          <a className="signupLink">
            <Styled.p>Sign up for newsletter</Styled.p>
            <ReactSVG src="/assets/svgs/arrow.svg" />
          </a>
        </Link>
        <div className="footerLogo"></div>
        <Styled.p>Ⓒ Dandi Technologies, Inc.</Styled.p> */}
      </div>
    </div>
  );
};

export default Footer;
