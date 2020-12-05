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
      url: `/assets/images/emily.png`,
      name: `Emily Miethner`,
      title: `Founder & CEO, FindSpark`,
    },
    {
      url: `/assets/images/carol.png`,
      name: `Carol Watson`,
      title: `Chief Inclusion Officer, BCW Global`,
    },
    {
      url: `/assets/images/lakuan.png`,
      name: `Lakuan Terry Smith`,
      title: `DEI Manager, Justworks`,
    },
    {
      url: `/assets/images/kerel.png`,
      name: `Kerel Cooper`,
      title: `SVP, Global Marketing, LiveIntent`,
    },
    {
      url: `/assets/images/michael.png`,
      name: `Michael Texidor`,
      title: `VP, Member Operations, IAB`,
    },
    {
      url: `/assets/images/henry.png`,
      name: `Herry Pierre Louis`,
      title: `Product Manager, Oscar Health`,
    },
    {
      url: `/assets/images/antoinette.png`,
      name: `Antoinette Hamilton`,
      title: `Global Head of I&D, Lam Researchal`,
    },
    {
      url: `/assets/images/darren.png`,
      name: `Darren Wesley Martin Jr.`,
      title: `Founder & CEO, Streamlined Media`,
    },
    {
      url: `/assets/images/damien.png`,
      name: `Damien Wint`,
      title: `Associate General Counsel, Advertising & Privacy, Facebook`,
    },
    {
      url: `/assets/images/jill.png`,
      name: `Jill Katz`,
      title: `CHRO, Assemble HR Consulting`,
    },
    {
      url: `/assets/images/peter.png`,
      name: `Peter Phelan`,
      title: `Founder & CEO, ValuesCulture`,
    },
    {
      url: `/assets/images/netta.png`,
      name: `Netta Conyers-Haynes`,
      title: `VP, Communications, Sequoia Consulting Group`,
    },
    {
      url: `/assets/images/stephen.png`,
      name: `Stephen Kim`,
      title: `Associate Director, Communication & Information, Princeton University Art Museum`,
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
