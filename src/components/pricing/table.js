/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const Table = () => {
  const tableData = {
    head: [
      "",
      "Dandi Logo",
      "General HR software and add-ons",
      "In-house analytics",
    ],
    body: [
      {
        title: `Over 1 million DEI insights on day 1`,
        dandi: true,
        general: false,
        inhouse: false,
        bg: "#262629",
      },
      {
        title: `Easy API integrations with all your data sources`,
        dandi: true,
        general: false,
        inhouse: false,
        bg: "transparent",
      },
      {
        title: `Deep DEI subject-matter expertise`,
        dandi: true,
        general: false,
        inhouse: false,
        bg: "#262629",
      },
      {
        title: `Full measurement of the employee lifecycle`,
        dandi: true,
        general: false,
        inhouse: false,
        bg: "transparent",
      },
      {
        title: `Adjusted wage gap analysis`,
        dandi: true,
        general: false,
        inhouse: false,
        bg: "#262629",
      },
      {
        title: `On-demand data refreshes. As often as you like`,
        dandi: true,
        general: false,
        inhouse: true,
        bg: "transparent",
      },
      {
        title: `Lawful domestic & international data collection guidance`,
        dandi: true,
        general: true,
        inhouse: false,
        bg: "#262629",
      },
    ],
  };
  return (
    <div className="table">
      <div className="head">
        {tableData.head.map((headItem, i) => (
          <div className="headItem" key={i}>
            <Styled.p>{headItem}</Styled.p>
          </div>
        ))}
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
              <div className="bodyItem">
                <Styled.p>{bodyItem.title}</Styled.p>
              </div>
              <div className="bodyItem">
                {bodyItem.dandi && (
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="50" fill="#FFD93B" />
                  </svg>
                )}
              </div>
              <div className="bodyItem">
                <Styled.p>{bodyItem.general ? "*" : ""}</Styled.p>
              </div>
              <div className="bodyItem">
                <Styled.p>{bodyItem.inhouse ? "*" : ""}</Styled.p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
