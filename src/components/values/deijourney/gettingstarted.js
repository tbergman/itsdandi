/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const GettingStarted = () => {
  const sections = [
    {
      title: "The moment",
      body: `For many businesses, the beginning of their DEI journey can be an
            exciting and vulnerable moment. There is the excitement of knowing
            that the company has committed to doing more for its people. But
            this is often mixed with the anxiety of knowing that this may be, at
            times, an uncertain and uncomfortable process.`,
    },
    {
      title: "The challenge",
      body: `Many businesses begin their DEI journey by taking some kind of action—perhaps hosting a diversity training or unconscious bias seminar. While this work can be invaluable, people are often left with a lingering question: Where do we go from here?`,
    },
    {
      title: "The opportunity: Adopt a data-driven approach",
      body: `Adding data to your DEI efforts brings greater structure and accountability to the entire process. Data can provide greater clarity around issues that need addressing, and greater insight into the programs that actually work.`,
    },
    {
      title: "How Dandi can help",
      body: `Dandi’s designed to meet your need for DEI data. On day 1 with the platform, you’ll have over 1 million new people insights at your disposal. `,
    },
  ];

  return (
    <div
      sx={{
        variant: "pages.values.deijourney.gettingstarted",
      }}
    >
      <div
        sx={{
          variant: "grid",
          rowGap: 0,
        }}
      >
        <Styled.h2>01. Getting started</Styled.h2>
        <div className="text">
          {sections.map((section, i) => (
            <div className="textSection" key={i}>
              <Styled.p className="title">{section.title}</Styled.p>
              <Styled.p className="body">{section.body}</Styled.p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
