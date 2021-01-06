/** @jsx jsx */
import { ReactSVG } from "react-svg";
import { jsx, Styled } from "theme-ui";
import { useRef, useState, useEffect } from "react";
import LearnMoreLink from "../learnmorelink";

const ItemSymbol = ({ input_, color }) => {
  switch (input_) {
    case "circle": {
      return (
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" fill={color} />
        </svg>
      );
    }
    case "circlesmall": {
      return (
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill={color} />
        </svg>
      );
    }
    case "empty": {
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

const Table = ({ width, content }) => {
  const tableBodyRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [tableBodyHeight, setTableBodyHeight] = useState(0);

  useEffect(() => {
    if (tableBodyRef.current) {
      setTableBodyHeight(tableBodyRef.current.clientHeight);
    }
  }, [tableBodyRef, width]);
  const { head_item1, head_item2, row_data } = content;

  return (
    <div className="Table">
      <div className="Table__head">
        <div className="Table__head-item"></div>
        <div className="Table__head-item">
          <div
            sx={{
              height: [
                `${tableBodyHeight + 175}px`,
                `${tableBodyHeight + 150}px`,
              ],
            }}
            className="Table__head-item-focusBorder"
          />
          <svg
            className="Table__head-item-logo"
            width="82"
            height="25"
            viewBox="0 0 82 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.358 12.5751C23.358 12.5751 23.9293 7.9657 29.5676 7.75495C33.5861 7.60485 36.2696 9.91018 36.2696 13.8396L36.2696 24.3185L32.9188 24.3185L32.9188 22.6282C32.9188 22.6282 31.0757 24.6561 28.06 24.6561C24.7087 24.6561 22.3633 22.2897 22.3633 19.9238C22.3633 17.2193 24.111 15.2589 27.0546 14.8533C29.4269 14.5264 32.99 14.1673 32.99 12.8951C32.99 11.2487 31.9258 10.2925 29.7816 10.2925C29.7816 10.2925 26.9992 10.2697 26.3566 12.5746L23.358 12.5746L23.358 12.5751ZM32.9188 16.8817L32.9188 15.8692C32.9188 15.778 32.8152 15.7238 32.7436 15.7793C31.6883 16.5931 29.1954 16.9926 27.7244 17.3888C26.453 17.7311 25.7141 18.4029 25.7141 19.5861C25.7141 20.6003 26.7195 21.6145 28.5622 21.6145C31.2432 21.6145 32.9188 19.9242 32.9188 16.8817Z"
              fill="#F2F2F2"
            />
            <path
              d="M43.2301 10.0636C43.2301 10.172 43.3679 10.2172 43.4301 10.129C43.9302 9.41976 45.3935 7.75098 48.089 7.75098C51.9425 7.75098 54.4022 10.4554 54.4022 14.8498L54.4022 24.3145L51.0514 24.3145L51.0514 14.8498C51.0514 12.4834 49.8175 10.7935 47.6396 10.7935C45.1266 10.7935 43.2301 12.4838 43.2301 16.033L43.2301 24.3145L39.8789 24.3145L39.8789 8.08903L43.2301 8.08903L43.2301 10.0636Z"
              fill="#F2F2F2"
            />
            <path
              d="M69.911 10.7943L69.911 0.654297L73.2622 0.654297L73.2622 24.3167L69.911 24.3167L69.911 22.0023C69.911 21.8926 69.7711 21.8488 69.7097 21.9391C69.1785 22.7231 67.5796 24.6543 64.7174 24.6543C60.5288 24.6543 57.0633 20.9361 57.0633 16.2037C57.0633 11.4713 60.5284 7.75309 64.7174 7.75309C67.8874 7.75309 69.2335 9.82919 69.7012 10.8412C69.7507 10.9496 69.911 10.9135 69.911 10.7943ZM69.911 16.2041C69.911 13.162 67.5651 10.7956 65.0521 10.7956C62.5391 10.7956 60.4141 13.162 60.4141 16.2041C60.4141 19.2462 62.5391 21.6126 65.0521 21.6126C67.5655 21.6126 69.911 19.2462 69.911 16.2041Z"
              fill="#F2F2F2"
            />
            <path
              d="M81.011 24.3153L77.6602 24.3153L77.6602 8.08983L81.011 8.08983L81.011 24.3153ZM81.011 5.44171L77.6602 5.44171L77.6602 2.0293L81.011 2.0293L81.011 5.44171Z"
              fill="#F2F2F2"
            />
            <path
              d="M8.2137 0.654297L6.12109 0.654297L6.12109 4.03488L8.2137 4.03488C12.7374 4.03488 16.4238 7.75309 16.4238 12.4855C16.4238 17.2179 12.7379 20.9365 8.2137 20.9365L6.12109 20.9365L6.12109 24.3166L8.2137 24.3166C14.7482 24.3166 20.1097 18.9081 20.1097 12.4855C20.1097 6.0628 14.7482 0.654297 8.2137 0.654297Z"
              fill="#F2F2F2"
            />
            <path
              d="M3.68593 5.89648L0 5.89648L1.76364e-07 9.57513L3.68593 9.57513L3.68593 5.89648Z"
              fill="#F2F2F2"
            />
            <path
              d="M3.68594 15.1807L0 15.1807L1.76366e-07 18.8593L3.68594 18.8593L3.68594 15.1807Z"
              fill="#F2F2F2"
            />
          </svg>
        </div>

        <div className="Table__head-item">
          <Styled.p className="Table__head-item-text">{head_item1}</Styled.p>
        </div>
        <div className="Table__head-item">
          <Styled.p className="Table__head-item-text">{head_item2}</Styled.p>
        </div>
      </div>
      <div ref={tableBodyRef} className="Table__body">
        {row_data.map((row, i) => (
          <div className="Table__body-row" key={i}>
            <div className="Table__body-row-grid">
              <div
                sx={{
                  justifyContent: "flex-start",
                }}
                className="Table__body-row-grid-item"
              >
                <Styled.p className="Table__body-row-grid-item-title">
                  {row.row_header}
                  <svg
                    onMouseEnter={() => setHoveredId(i)}
                    onMouseLeave={() => setHoveredId(null)}
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
                <div
                  className={`Table__body-row-grid-item-infoBox${
                    hoveredId === i ? "-open" : ""
                  }`}
                >
                  <Styled.p className="Table__body-row-grid-item-infoBox-body">
                    {row.infobox_body}
                  </Styled.p>
                  <LearnMoreLink
                    className="Table__body-row-grid-item-infoBox-link"
                    href={row.infobox_url}
                    color="#F9D2FF"
                    text={row.infobox_button_text}
                  />
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
        ))}
      </div>
    </div>
  );
};

export default Table;
