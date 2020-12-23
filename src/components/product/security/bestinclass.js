/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { motion } from "framer-motion";
import InView from "../../inview";
import { rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";

const BestInClass = ({
  setNavbarStyling,
  navBarStyling,
  subMenuStyling,
  setSubMenuStyling,
  windowHeight,
  isDesktop,
}) => {
  const modules = [
    {
      length: "65%",
      title: `GDPR compliant`,
      body: `No matter where your people are, their data is secure. `,
      color: "#A4F0F4",
    },
    {
      length: "80%",
      title: `Full encryption`,
      body: `All data is encrypted at rest and in transit.`,
      color: "#FFD93B",
    },
    {
      length: "95%",
      title: `SOC 2 compliant`,
      body: `A full suite of features that meet AICPA SOC 2 trust service protocols.`,
      color: "#F9D2FF",
    },
  ];
  return (
    <InView
      variant="pages.product.security.bestinclass"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <SubInView
        subMenuStyling={subMenuStyling}
        setSubMenuStyling={setSubMenuStyling}
        rootMargin={rootMarginSub(windowHeight)}
      >
        <div
          sx={{
            variant: "grid",
          }}
        >
          <div className="toptext">
            <Styled.h2>Best-in-class data protection</Styled.h2>
            <Styled.p>
              We’ve built industry-accepted best practices into every layer of
              Dandi, and continue to evolve as rules and regulations change.
            </Styled.p>
          </div>
          <div className="modules">
            {modules.map((module, i) => (
              <div
                sx={{
                  width: module.length,
                }}
                className="module"
                key={i}
              >
                <div className="divider">
                  <svg>
                    <motion.line
                      x1="0%"
                      y1="50%"
                      x2="97%"
                      y2="50%"
                      stroke={module.color}
                      strokeWidth="2"
                    />
                    <motion.circle
                      cx="97%"
                      cy="50%"
                      r="5"
                      fill={module.color}
                    />
                  </svg>
                </div>
                <div className="text">
                  <Styled.p
                    sx={{
                      color: module.color,
                    }}
                  >
                    {module.title}
                  </Styled.p>
                  <Styled.p>{module.body}</Styled.p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default BestInClass;
