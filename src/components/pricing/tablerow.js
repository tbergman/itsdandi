/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import InfoBox from "./infobox";
import ItemSymbol from "./itemsymbol";
import { useMachine } from "@xstate/react";
import { infoBoxMachine } from "../../machines/pricing";

const TableRow = ({ row, idx, isDesktop }) => {
  const [state, send] = useMachine(infoBoxMachine);

  return (
    <div className="Table__body-row">
      <div className="Table__body-row-grid">
        <div
          sx={{
            justifyContent: "flex-start",
          }}
          className="Table__body-row-grid-item"
          onMouseLeave={() => (isDesktop ? send("CLOSE") : null)}
        >
          <div className="Table__body-row-grid-item-title">
            <Styled.p className="Table__body-row-grid-item-title-text">
              {row.row_header}
              {!row.hide_infobox && (
                <svg
                  onMouseEnter={() => (isDesktop ? send("OPEN") : null)}
                  onClick={() => {
                    return !isDesktop ? send("OPEN") : null;
                  }}
                  className="Table__body-row-grid-item-title-infoIcon"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.49 6.5V11.3H7.5V6.5H8.49ZM7.5 5.5V4.5H8.49V5.5H7.5Z"
                    fill="#F2F2F2"
                    fillOpacity="0.7"
                  />
                  <circle
                    cx="8"
                    cy="8"
                    r="5.5"
                    stroke="#F2F2F2"
                    strokeOpacity="0.7"
                  />
                </svg>
              )}
            </Styled.p>
            {!row.hide_infobox && (
              <InfoBox
                open={state.matches("opened")}
                content={{
                  body: row.infobox_body,
                  button1: {
                    url: row.infobox_button_url1,
                    text: row.infobox_button_text1,
                  },
                  button2: {
                    url: row.infobox_button_url2,
                    text: row.infobox_button_text2,
                  },
                }}
                state={state}
                send={send}
                isDesktop={isDesktop}
              />
            )}
          </div>
        </div>
        <div
          sx={{
            justifyContent: "center",
          }}
          className="Table__body-row-grid-item"
        >
          <ItemSymbol
            className="Table__body-row-grid-item-symbol"
            input_={row.dandi_column}
            color="#FFD93B"
            animate={true}
            idx={idx}
          />
        </div>
        <div
          sx={{
            justifyContent: "center",
          }}
          className="Table__body-row-grid-item"
        >
          <ItemSymbol
            className="Table__body-row-grid-item-symbol"
            input_={
              row.general_column === "freetext"
                ? row.general_freetext
                : row.general_column
            }
            color="#CACACE"
          />
        </div>
        <div
          sx={{
            justifyContent: "center",
          }}
          className="Table__body-row-grid-item"
        >
          <ItemSymbol
            className="Table__body-row-grid-item-symbol"
            input_={
              row.inhouse_column === "freetext"
                ? row.inhouse_freetext
                : row.inhouse_column
            }
            color="#CACACE"
          />
        </div>
      </div>
    </div>
  );
};

export default TableRow;
