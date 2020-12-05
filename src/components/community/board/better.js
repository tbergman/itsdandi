/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Person from "../person";

const Better = () => {
  const people = [
    {
      url: `/assets/images/elisa.png`,
      name: `Elisa Leary`,
      title: `Managing Director, Head of DEI, Glocap`,
    },
    {
      url: `/assets/images/elisa.png`,
      name: `Elisa Leary`,
      title: `Managing Director, Head of DEI, Glocap`,
    },
    {
      url: `/assets/images/elisa.png`,
      name: `Elisa Leary`,
      title: `Managing Director, Head of DEI, Glocap`,
    },
    {
      url: `/assets/images/elisa.png`,
      name: `Elisa Leary`,
      title: `Managing Director, Head of DEI, Glocap`,
    },
  ];
  return (
    <div
      sx={{
        variant: "pages.community.board.better",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h2>Making Dandi better for everyone</Styled.h2>
          <Styled.p>
            We’ve got a huge mission at Dandi—to make business better for
            everyone. We know we can’t do it alone. And that’s where our DEI
            Advisory Board comes in.
            <br />
            <br /> The Advisory Board, along with our Marketplace Partners,
            provides an important point of contact with other DEI leaders.
            Conceived as a working group of diverse talents and brilliant minds,
            the Board offers ongoing input regarding our products and the
            practice of DEI as a whole. They’re a vital complement to our team,
            and we’re very lucky to have them working with us.
          </Styled.p>
        </div>

        <div className="people">
          {people.map((person, i) => (
            <Person url={person.url} name={person.name} title={person.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Better;
