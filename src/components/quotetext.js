/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

const QuoteText = ({ content }) => {
  const { body, name, title } = content;

  return (
    <div
      sx={{
        variant: "components.quotetext",
      }}
      className="QuoteText"
    >
      <div className="QuoteText__text slideUp">
        <div className="QuoteText__quotation">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 8.86538C0 6.07829 0.646281 3.99807 1.93884 2.62473C3.2718 1.25138 4.98848 0.443527 7.0889 0.201172V3.41238C6.11947 3.69513 5.33182 4.24043 4.72593 5.04828C4.12004 5.81574 3.8171 6.98712 3.8171 8.56243V8.86538H7.14949V16.0149H0V8.86538ZM9.8154 16.0149V8.86538C9.8154 6.07829 10.4617 3.99807 11.7542 2.62473C13.0872 1.25138 14.8039 0.443527 16.9043 0.201172V3.41238C15.9349 3.69513 15.1472 4.24043 14.5413 5.04828C13.9354 5.81574 13.6325 6.98712 13.6325 8.56243V8.86538H16.9649V16.0149H9.8154Z"
              fill="#1A1A1D"
            />
          </svg>
        </div>

        <div className="QuoteText__body slideUp">
          <Styled.h3 className="QuoteText__bodyText">{body}</Styled.h3>
        </div>

        <div className="QuoteText__name slideUp">
          <Styled.p className="QuoteText__nameText">
            {name}
            <br />
            {title}
          </Styled.p>
        </div>
      </div>
    </div>
  );
};

export default QuoteText;
