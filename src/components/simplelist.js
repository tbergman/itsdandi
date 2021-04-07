/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const SimpleList = ({ list, shouldSlideUp }) => {
  return (
    <ul
      sx={{
        listStyleType: "none",
        p: 0,
        m: 0,
      }}
    >
      {list.map((item, i) => (
        <li
          className={shouldSlideUp ? "slideUp" : ""}
          key={i}
          sx={{
            mb: [3],
            pl: [3],
            position: "relative",
            "&:after": {
              content: "''",
              position: "absolute",
              top: "25%",
              height: "8px",
              width: "8px",
              borderRadius: "8px",
              bg: "blue",
              left: [0],
            },
          }}
        >
          <Styled.p>{item.item}</Styled.p>
        </li>
      ))}
    </ul>
  );
};

export default SimpleList;
