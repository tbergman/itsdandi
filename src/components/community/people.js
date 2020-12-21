/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { rootMargin } from "../../helpers/utils";
import InView from "../inview";
import Person from "./person";

const People = ({
  setNavbarStyling,
  navBarStyling,
  windowHeight,
  title,
  body,
  isDesktop,
  people,
}) => {
  return (
    <InView
      variant="components.shared.people"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={rootMargin(isDesktop, windowHeight)}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="toptext">
          <div className="section1">
            <Styled.h2>{title}</Styled.h2>
          </div>
          <div className="section2">
            <Styled.p>{body}</Styled.p>
          </div>
        </div>

        <div className="people">
          {people.map((person, i) => (
            <Person url={person.url} name={person.name} title={person.title} />
          ))}
        </div>
      </div>
    </InView>
  );
};

export default People;
