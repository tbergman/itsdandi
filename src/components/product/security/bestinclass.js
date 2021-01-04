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
  content,
}) => {
  const { header, body, categories } = content;

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
            <Styled.h2>{header}</Styled.h2>
            <Styled.p>{body}</Styled.p>
          </div>
          <div className="modules">
            {categories.map((module, i) => (
              <div
                sx={{
                  width: `${module.length}%`,
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
                      stroke={module.hexcode}
                      strokeWidth="2"
                    />
                    <motion.circle
                      cx="97%"
                      cy="50%"
                      r="5"
                      fill={module.hexcode}
                    />
                  </svg>
                </div>
                <div className="text">
                  <Styled.p
                    sx={{
                      color: module.hexcode,
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
