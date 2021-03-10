export const standardModule = {
  twoCol: {
    display: "flex",
    flexFlow: ["column", "unset"],
    mt: [8, 16],
    mb: [6, 13],
    ".StandardModule__section1": {
      flex: "auto",
      width: [
        "100%",
        (t) => t.desktopSectionWidth,
        (t) => t.desktopSectionWidthBig,
        (t) => t.desktopSectionWidthMassive,
      ],
    },
    ".StandardModule__header": {
      maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
    },

    ".StandardModule__section2": {
      width: [
        "100%",
        (t) => t.desktopSectionWidth,
        (t) => t.desktopSectionWidthBig,
        (t) => t.desktopSectionWidthMassive,
      ],
      ml: [
        0,
        (t) => t.colWidthDesktop,
        (t) => t.colWidthDesktopBig,
        (t) => t.colWidthDesktopMassive,
      ],
    },
    ".StandardModule__body": {
      mt: [3, 0],
      fontSize: ["16px"],
      lineHeight: ["24px"],
      maxWidth: ["unset", (t) => t.desktopMaxSectionWidth],
    },
  },
};
