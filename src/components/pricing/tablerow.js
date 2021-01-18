/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import InfoBox from "./infobox";
import ItemSymbol from "./itemsymbol";
import { useMachine } from "@xstate/react";
import { infoBoxMachine } from "../../machines/pricing";

const TableRow = ({ row, idx }) => {
  const [state, send] = useMachine(infoBoxMachine);

  return (
    <div className="Table__body-row">
      <div className="Table__body-row-grid">
        <div
          sx={{
            justifyContent: "flex-start",
          }}
          className="Table__body-row-grid-item"
          onMouseLeave={() => send("CLOSE")}
        >
          <Styled.p className="Table__body-row-grid-item-title">
            {row.row_header}
            <svg
              onMouseEnter={() => send("OPEN")}
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
            <InfoBox
              open={state.matches("opened")}
              body={row.infobox_body}
              url={row.infobox_url}
              buttonText={row.infobox_button_text}
            />
          </Styled.p>
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
