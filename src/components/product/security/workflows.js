/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import { lineBreaks, rootMargin, rootMarginSub } from "../../../helpers/utils";
import InView from "../../inview";
import SubInView from "../../subinview";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { globalSlideUp } from "../../../helpers/animations";

const Workflows = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  subMenuStyling,
  setSubMenuStyling,
  isDesktop,
  content,
}) => {
  const { header, body, items } = content;
  const animationControls = useAnimation();

  const { inView, ref, entry } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      animationControls.start((i) => {
        return globalSlideUp.visible(i);
      });
    }
  }, [inView]);

  return (
    <InView
      variant="pages.product.security.workflows"
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
          ref={ref}
          sx={{
            variant: "grid",
          }}
          className="Workflows"
        >
          <div className="Workflows__section1">
            <div className="Workflows__toptext">
              <motion.div
                initial="hidden"
                animate={animationControls}
                variants={globalSlideUp}
                custom={0}
                className="Workflows__header"
              >
                <Styled.h2 className="Workflows__headerText">
                  {header}
                </Styled.h2>
              </motion.div>
              <motion.div
                initial="hidden"
                animate={animationControls}
                variants={globalSlideUp}
                custom={1}
                className="Workflows__body"
              >
                <Styled.p className="Workflows__bodyText">
                  {lineBreaks(body)}
                </Styled.p>
              </motion.div>
            </div>
          </div>
          <div className="Workflows__section2">
            <motion.div className="Workflows__categories">
              {items.map((category, i) => (
                <motion.div
                  initial="hidden"
                  animate={animationControls}
                  variants={globalSlideUp}
                  custom={2 + i}
                  className="Workflows__category"
                  key={i}
                >
                  <div className="Workflows__categoryHeader">
                    <Styled.p className="Workflows__categoryHeaderText">
                      {category.title}
                    </Styled.p>
                  </div>
                  <div className="Workflows__categoryBody">
                    <Styled.p className="Workflows__categoryBodyText">
                      {category.body}
                    </Styled.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="Workflows__graphic">
            <svg
              className="Workflows__svg"
              width="466"
              height="466"
              viewBox="0 0 466 466"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M232.716 464.188C360.846 464.188 464.716 360.501 464.716 232.596C464.716 104.691 360.846 1.00391 232.716 1.00391V464.188Z"
                fill="#FFD93B"
              />
              <path
                d="M233 1.14648C361.13 1.14648 465 104.834 465 232.739C465 360.644 361.13 464.331 233 464.331C104.87 464.331 1 360.644 1 232.739C1 143.944 51.0596 66.8214 124.543 27.9588"
                stroke="#FFD93B"
                strokeWidth="2"
              />
              <circle cx="124.133" cy="28.0558" r="4.07733" fill="#FFD93B" />
            </svg>

            {/* <ReactSVG src="/assets/svgs/product/security/illustration_03.4.2.svg" /> */}
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default Workflows;
