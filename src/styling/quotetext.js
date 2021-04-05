export const quotetext = {
  height: "100%",
  display: "flex",
  alignItems: ["center", "center", "center", "flex-start"],
  mt: [4, 4, 4, 0],

  ".QuoteText__text": {
    color: "black",
    position: "relative",
  },
  ".QuoteText__quotation": {
    position: "absolute",
    top: [0],
  },
  ".QuoteText__body": {
    ml: [5],
    maxWidth: ["unset", "unset", "unset", (t) => t.desktopMaxSectionWidth],
  },
  ".QuoteText__bodyText": {
    fontFamily: "display",
    fontSize: ["24px", "24px", "24px", "40px"],
    lineHeight: ["31.2px", "31.2px", "48px"],
  },
  ".QuoteText__name": {
    mt: [4],
    ml: [5],
    mb: [8, 8, 8, 0],
  },
  ".QuoteText__nameText": {
    lineHeight: ["20px"],
    fontSize: ["14px"],
    fontFamily: "body",
  },
  ".QuoteText__title": {
    lineHeight: ["20px"],
    fontSize: ["14px"],
    fontFamily: "body",
  },
  ".QuoteText__company": {
    lineHeight: ["20px"],
    fontSize: ["14px"],
    fontFamily: "body",
  },
};
