/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";

const ItemSymbol = ({ input_, color }) => {
  switch (input_) {
    case "circle": {
      return (
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" fill={color} />
        </svg>
      );
    }
    case false: {
      return null;
    }
    default: {
      return (
        <Styled.p
          sx={{
            color: color,
            writingMode: ["vertical-rl", "unset"],
            textAlign: ["right", "unset"],
          }}
        >
          {input_}
        </Styled.p>
      );
    }
  }
};

const Table = () => {
  const tableData = {
    body: [
      {
        title: `Over 1 million DEI insights on day 1`,
        dandi: "circle",
        general: false,
        inhouse: false,
        bg: "#262629",
      },
      {
        title: `Easy API integrations with all your data sources`,
        dandi: "circle",
        general: false,
        inhouse: false,
        bg: "transparent",
      },
      {
        title: `Deep DEI subject-matter expertise`,
        dandi: "circle",
        general: false,
        inhouse: false,
        bg: "#262629",
      },
      {
        title: `Full measurement of the employee lifecycle`,
        dandi: "circle",
        general: false,
        inhouse: false,
        bg: "transparent",
      },
      {
        title: `Adjusted wage gap analysis`,
        dandi: "circle",
        general: false,
        inhouse: false,
        bg: "#262629",
      },
      {
        title: `On-demand data refreshes. As often as you like`,
        dandi: "circle",
        general: false,
        inhouse: "circle",
        bg: "transparent",
      },
      {
        title: `Lawful domestic & international data collection guidance`,
        dandi: "circle",
        general: "Rarely",
        inhouse: false,
        bg: "#262629",
      },
      {
        title: `Minimal investment of time and staff`,
        dandi: "circle",
        general: "circle",
        inhouse: false,
        bg: "transparent",
      },
      {
        title: `Power to analyze over 1 million unique data sets`,
        dandi: "circle",
        general: false,
        inhouse: "Rarely",
        bg: "#262629",
      },
      {
        title: `Robust support and education`,
        dandi: "circle",
        general: false,
        inhouse: false,
        bg: "transparent",
      },
      {
        title: `Weekly product updates`,
        dandi: "circle",
        general: "Not for DEI",
        inhouse: false,
        bg: "#262629",
      },
    ],
  };
  return (
    <div className="table">
      <div className="head">
        <div className="headItem"></div>
        <div className="headItem">
          <div className="focusborder"></div>
          <ReactSVG className="logo" src="/assets/svgs/dandiLogo.svg" />
        </div>

        <div className="headItem">
          <Styled.p>General HR software and add-ons</Styled.p>
        </div>
        <div className="headItem">
          <Styled.p>In-house analytics</Styled.p>
        </div>
      </div>
      <div className="body">
        {tableData.body.map((bodyItem, i) => (
          <div
            sx={{
              bg: bodyItem.bg,
            }}
            className="bodyRow"
            key={i}
          >
            <div className="bodyGrid">
              <div
                sx={{
                  justifyContent: "flex-start",
                }}
                className="bodyItem"
              >
                <Styled.p>{bodyItem.title}</Styled.p>
              </div>
              <div
                sx={{
                  justifyContent: "center",
                }}
                className="bodyItem"
              >
                <ItemSymbol input_={bodyItem.dandi} color="#FFD93B" />
              </div>
              <div
                sx={{
                  justifyContent: "center",
                }}
                className="bodyItem"
              >
                <ItemSymbol input_={bodyItem.general} color="#CACACE" />
              </div>
              <div
                sx={{
                  justifyContent: "center",
                }}
                className="bodyItem"
              >
                <ItemSymbol input_={bodyItem.inhouse} color="#CACACE" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
