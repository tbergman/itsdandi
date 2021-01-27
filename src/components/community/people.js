/** @jsx jsx */
import { motion } from "framer-motion";
import { jsx, Styled } from "theme-ui";
import { rootMargin, rootMarginSub } from "../../helpers/utils";
import InView from "../inview";
import SubInView from "../subinview";
import Person from "./person";

const People = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  subMenuStyling,
  setSubMenuStyling,
  content,
  isDesktop,
}) => {
  const { header, body, people } = content;
  return (
    <InView
      variant="components.shared.people"
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
            <div className="section1">
              <Styled.h2>{header}</Styled.h2>
            </div>
            <div className="section2">
              <Styled.p>{body}</Styled.p>
            </div>
          </div>

          <motion.div className="people">
            {people.map((person, i) => (
              <Person
                key={i}
                images={{
                  desktop: person.desktop_image,
                  mobile: person.mobile_image,
                }}
                name={person.name}
                title={person.title}
                company={person.company}
                linkedin={person.linkedin}
                idx={i}
              />
            ))}
          </motion.div>
        </div>
      </SubInView>
    </InView>
  );
};

export default People;
