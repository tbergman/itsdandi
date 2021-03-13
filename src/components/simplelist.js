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
            pl: [2],
            position: "relative",
            "&:after": {
              content: "'–'",
              position: "absolute",
              top: "1px",
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
