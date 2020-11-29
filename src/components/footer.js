/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import FooterForm from "./footerform";
import LearnMoreLink from "./learnmorelink";

const Footer = () => {
  const socialsIcons = [
    "/assets/svgs/fb.svg",
    "/assets/svgs/linkedin.svg",
    "/assets/svgs/twitter.svg",
  ];

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

        <FooterForm />
        <div className="socials">
          {socialsIcons.map((icon, i) => (
            <div
              sx={{
                gridArea: [`1/${i + 1}/2/${i + 2}`],
              }}
              key={i}
            >
              <ReactSVG src={icon} />
            </div>
          ))}
        </div>
        <div className="signupLink">
          <LearnMoreLink
            href="/"
            text="Sign up for newsletter"
            color="#FFD93B"
          />
        </div>

        <div className="bottomSection">
          <ReactSVG src="/assets/svgs/dandiLogo.svg" />
          <Styled.p>Ⓒ Dandi Technologies, Inc.</Styled.p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
