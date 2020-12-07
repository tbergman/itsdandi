/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Navigation from "../../src/components/navigation";
import Footer from "../../src/components/footer";
import SubNavigation from "../../src/components/subnavigation";
import Header from "../../src/components/values/deijourney/header";
import TextBlock from "../../src/components/values/deijourney/textblock";
import Partners from "../../src/components/values/deijourney/partners";
import { useState } from "react";

import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import MobileNav from "../../src/components/mobilenav";

const Values = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ctx = useThemeUI();
  const { theme } = ctx;
  const subPages = ["Pay Equity", "The DEI Journey", "For Your Role"];
  const colors = [
    {
      bg: "#FFF",
      color: theme.colors.black,
    },
  ];

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
        bg: "#FFF",
      }}
    >
      <Navigation current="values" />
      <MobileNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        colors={colors}
      />
      <Header />
      <TextBlock
        title={`01. Getting Started`}
        sections={sections}
        styling={{
          bg: theme.colors.white,
          opacity: 0.96,
        }}
      />
      <TextBlock
        title={`02. Unpacking the data`}
        sections={sections}
        styling={{
          bg: "transparent",
          div: {
            ".text": {
              mb: [22],
            },
          },
        }}
      />
      <Partners />
      <TextBlock title={`03. Taking action`} sections={sections} />
      <TextBlock
        title={`04. Sustaining Progress`}
        sections={sections}
        styling={{
          bg: "white",
        }}
      />
      <SubNavigation subPages={subPages} />
      <Footer />
    </div>
  );
};

export default Values;
