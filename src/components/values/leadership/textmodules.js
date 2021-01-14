/** @jsx jsx */
import { jsx, Styled, useThemeUI } from "theme-ui";
import LearnMoreLink from "../../learnmorelink";
import InView from "../../inview";
import { rootMargin, rootMarginSub } from "../../../helpers/utils";
import SubInView from "../../subinview";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import TextModule from "./textmodule";

const TextModules = ({
  modules,
  setNavbarStyling,
  subMenuStyling,
  setSubMenuStyling,
  windowHeight,
  navBarStyling,
  isDesktop,
}) => {
  return (
    <InView
      variant="pages.values.leadership.textmodules"
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
          className="TextModules"
        >
          <div className="TextModules__wrapper">
            {modules.map((module, i) => (
              <TextModule
                key={i}
                header={module.header}
                body={module.body}
                link={{
                  description: module.link_description,
                  url: module.url,
                  text: module.button_text,
                }}
              />
            ))}
          </div>
        </div>
      </SubInView>
    </InView>
  );
};

export default TextModules;
