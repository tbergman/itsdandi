/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Person from "../person";
import InView from "../../inview";

const DoMore = ({ setNavbarStyling, navBarStyling, windowHeight }) => {
  const people = [
    {
      url: `/assets/images/carol.png`,
      name: `Carol Watson`,
      title: `Chief Inclusion Officer, BCW Global`,
    },
    {
      url: `/assets/images/jamie.png`,
      name: `Jaime Klein`,
      title: `Founder & CEO, Inspire Human Resources`,
    },
    {
      url: `/assets/images/dave.png`,
      name: `Dave Cilberto`,
      title: `Principal, Dave Ciliberto Enterprises, Inc.`,
    },
    {
      url: `/assets/images/elisa.png`,
      name: `Elisa Leary`,
      title: `Managing Director, Head of DEI, Glocap`,
    },
    {
      url: `/assets/images/lily.png`,
      name: `Lily`,
      title: `-`,
    },
    {
      url: `/assets/images/robert.png`,
      name: `Robert Beaven`,
      title: `COO & CRO, Jennifer Brown Consulting`,
    },
    {
      url: `/assets/images/tayo.png`,
      name: `Tayo Rockson`,
      title: `President & CEO, UYD Management`,
    },
    {
      url: `/assets/images/natania.png`,
      name: `Natania Gazek`,
      title: `-`,
    },
    {
      url: `/assets/images/nathan.png`,
      name: `Nathan Knight`,
      title: `-`,
    },
  ];
  return (
    <InView
      variant="pages.community.partners.domore"
      setNavbarStyling={setNavbarStyling}
      navBarStyling={navBarStyling}
      rootMargin={`0px 0px -${windowHeight - 94}px 0px`}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h2>Do more with your data</Styled.h2>
          <Styled.p>
            Composed of leading consultants and practitioners, Dandi’s
            Marketplace Partners are experts at leveraging data to advance DEI
            initiatives. Whether it’s helping make sense of your numbers,
            implementing new programs, or managing through organizational
            change, Partners can provide the extra know-how needed to make good
            things happen.
          </Styled.p>
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

export default DoMore;
