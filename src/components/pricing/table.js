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
    case "circleSmall": {
      return (
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill={color} />
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
        infoText: `Dandi connects to your HR systems' pre-built APIs, no development resources required. Have a data warehouse? We can connect to that too, but it's not required.`,
      },
      {
        title: `Easy API integrations with all your data sources`,
        dandi: "circle",
        general: false,
        inhouse: false,
        bg: "transparent",
        infoText: `Dandi connects to your HR systems' pre-built APIs, no development resources required. Have a data warehouse? We can connect to that too, but it's not required.`,
      },
      {
        title: `Deep DEI subject-matter expertise`,
        dandi: "circle",
        general: false,
        inhouse: false,
        bg: "#262629",
        infoText: `Dandi connects to your HR systems' pre-built APIs, no development resources required. Have a data warehouse? We can connect to that too, but it's not required.`,
      },
      {
        title: `Full measurement of the employee lifecycle`,
        dandi: "circle",
        general: false,
        inhouse: false,
        bg: "transparent",
        infoText: `Dandi connects to your HR systems' pre-built APIs, no development resources required. Have a data warehouse? We can connect to that too, but it's not required.`,
      },
      {
        title: `Adjusted wage gap analysis`,
        dandi: "circle",
        general: false,
        inhouse: false,
        bg: "#262629",
        infoText: `Dandi connects to your HR systems' pre-built APIs, no development resources required. Have a data warehouse? We can connect to that too, but it's not required.`,
      },
      {
        title: `On-demand data refreshes. As often as you like`,
        dandi: "circle",
        general: false,
        inhouse: "circleSmall",
        bg: "transparent",
        infoText: `Dandi connects to your HR systems' pre-built APIs, no development resources required. Have a data warehouse? We can connect to that too, but it's not required.`,
      },
      {
        title: `Lawful domestic & international data collection guidance`,
        dandi: "circle",
        general: "Rarely",
        inhouse: false,
        bg: "#262629",
        infoText: `Dandi connects to your HR systems' pre-built APIs, no development resources required. Have a data warehouse? We can connect to that too, but it's not required.`,
      },
      {
        title: `Minimal investment of time and staff`,
        dandi: "circle",
        general: "circleSmall",
        inhouse: false,
        bg: "transparent",
        infoText: `Dandi connects to your HR systems' pre-built APIs, no development resources required. Have a data warehouse? We can connect to that too, but it's not required.`,
      },
      {
        title: `Power to analyze over 1 million unique data sets`,
        dandi: "circle",
        general: false,
        inhouse: "Rarely",
        bg: "#262629",
        infoText: `Dandi connects to your HR systems' pre-built APIs, no development resources required. Have a data warehouse? We can connect to that too, but it's not required.`,
      },
      {
        title: `Robust support and education`,
        dandi: "circle",
        general: false,
        inhouse: false,
        bg: "transparent",
        infoText: `Dandi connects to your HR systems' pre-built APIs, no development resources required. Have a data warehouse? We can connect to that too, but it's not required.`,
      },
      {
        title: `Weekly product updates`,
        dandi: "circle",
        general: "Not for DEI",
        inhouse: false,
        bg: "#262629",
        infoText: `Dandi connects to your HR systems' pre-built APIs, no development resources required. Have a data warehouse? We can connect to that too, but it's not required.`,
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
                <Styled.p className="title">
                  {bodyItem.title}
                  <svg
                    className="infoicon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.49 6.5V11.3H7.5V6.5H8.49ZM7.5 5.5V4.5H8.49V5.5H7.5Z"
                      fill="#F2F2F2"
                      fill-opacity="0.7"
                    />
                    <circle
                      cx="8"
                      cy="8"
                      r="5.5"
                      stroke="#F2F2F2"
                      stroke-opacity="0.7"
                    />
                  </svg>
                </Styled.p>
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
