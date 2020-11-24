/** @jsx jsx */
import { jsx } from "theme-ui";

const MobileNav = () => {
  return (
    <div
      sx={{
        variant: "components.mobilenav",
      }}
    >
      <div className="hamburger">
        <span
          sx={{
            top: "0",
          }}
        />
        <span
          sx={{
            top: "7px",
          }}
        />
        <span
          sx={{
            top: "14px",
          }}
        />
      </div>
    </div>
  );
};

export default MobileNav;
