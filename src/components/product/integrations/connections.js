/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const Connections = () => {
  return (
    <div
      sx={{
        variant: "pages.product.integrations.connections",
      }}
    >
      <div
        sx={{
          variant: "grid",
        }}
      >
        <div className="text">
          <Styled.h2>All the right connections</Styled.h2>
          <Styled.p>
            Dandi integrates simply and securely through the API’s of most
            leading HR platforms. There’s no coding or data warehousing
            required, so setup is a snap.
          </Styled.p>
        </div>
        <div className="logos">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Connections;
