export const quotetext = {
  height: "100%",
  display: "flex",
  alignItems: ["center", "flex-start"],
  mt: [4, 0],

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
    maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
  },
  ".QuoteText__bodyText": {
    fontFamily: "display",
    fontSize: ["24px", "40px"],
    lineHeight: ["31.2px", "48px"],
  },
  ".QuoteText__name": {
    mt: [4],
    ml: [5],
    mb: [8, 0],
  },
  ".QuoteText__nameText": {
    lineHeight: ["20px"],
    fontSize: ["14px"],
    fontFamily: "body",
  },
};
