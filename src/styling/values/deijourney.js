export const deijourney = {
  topgraphic: {
    position: "absolute",
    zIndex: 99,
    right: [
      "20px",
      "20px",
      "20px",
      (t) => `calc(calc(${t.colWidthDesktop}) + 80px)`,
      (t) =>
        `calc(calc(calc(${t.colWidthDesktopBig}) + 40px) + ${t.desktopBigGutters})`,
      (t) =>
        `calc(calc(calc(${t.colWidthDesktopMassive}) + 40px) + ${t.desktopMassiveGutters})`,
    ],
    width: [
      (t) => `calc(calc(${t.colWidthMob} * 2) + 40px)`,
      (t) => `calc(calc(${t.colWidthMob} * 2) + 40px)`,
      (t) => `calc(calc(${t.colWidthMob} * 2) + 40px)`,
      "200px",
    ],
    height: [
      (t) => `calc(calc(${t.colWidthMob} * 2) + 40px)`,
      (t) => `calc(calc(${t.colWidthMob} * 2) + 40px)`,
      (t) => `calc(calc(${t.colWidthMob} * 2) + 40px)`,
      "200px",
    ],
    top: [
      (t) => `calc(calc(${t.colWidthMob} + 20px) / -1)`,
      (t) => `calc(calc(${t.colWidthMob} + 20px) / -1)`,
      (t) => `calc(calc(${t.colWidthMob} + 20px) / -1)`,
      "-100px",
    ],
    div: {
      height: "100%",
      width: "100%",
      div: {
        svg: {
          height: "100%",
          width: "100%",
        },
      },
    },
  },
  textblock: {
    color: "black",
    ".TextBlock__header": {
      mt: [10, 10, 10, 16],
      gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/3/2/-1"],
      fontFamily: "display",
    },
    ".TextBlock__textWrapper": {
      gridArea: ["2/1/3/-1", "2/1/3/-1", "2/1/3/-1", "2/3/3/-1"],
      mt: [3, 3, 3, 5],
      mb: [7, 7, 7, 18],
      display: "flex",
      flexFlow: ["column", "column", "column", "row wrap"],
      ".TextBlock__textWrapper-section": {
        width: [
          "100%",
          "100%",
          "100%",
          (t) => `calc(calc(${t.colWidthDesktop} * 4) + 160px)`,
          (t) => `calc(calc(${t.colWidthDesktopBig} * 4) + 160px)`,
          (t) => `calc(calc(${t.colWidthDesktopMassive} * 4) + 160px)`,
        ],
        ".TextBlock__textWrapper-section-title": {
          fontFamily: "medium",
          fontSize: ["16px"],
          lineHeight: ["24px"],
          maxWidth: [
            "unset",
            (t) => t.tabletMaxSectionWidth,
            (t) => t.tabletMaxSectionWidth,
            (t) => t.desktopMaxSectionWidth,
          ],
        },
        ".TextBlock__textWrapper-section-body": {
          fontSize: ["16px"],
          lineHeight: ["24px"],
          maxWidth: [
            "unset",
            (t) => t.tabletMaxSectionWidth,
            (t) => t.tabletMaxSectionWidth,
            (t) => t.desktopMaxSectionWidth,
          ],
        },
      },
      ".TextBlock__textWrapper-section:nth-of-type(2n)": {},
      ".TextBlock__textWrapper-section:nth-of-type(1)": {
        order: ["unset", "unset", "unset", 1],
      },
      ".TextBlock__textWrapper-section:nth-of-type(3)": {
        order: ["unset", "unset", "unset", 2],
        ml: [
          0,
          0,
          0,
          (t) => t.colWidthDesktop,
          (t) => t.colWidthDesktopBig,
          (t) => t.colWidthDesktopMassive,
        ],
      },
      ".TextBlock__textWrapper-section:nth-of-type(2)": {
        order: ["unset", "unset", "unset", 3],
      },
      ".TextBlock__textWrapper-section:nth-of-type(4)": {
        order: ["unset", "unset", "unset", 4],
        ml: [
          0,
          0,
          0,
          (t) => t.colWidthDesktop,
          (t) => t.colWidthDesktopBig,
          (t) => t.colWidthDesktopMassive,
        ],
      },
    },
  },
  partners: {
    bg: "rgba(250, 250, 250, 0.96)",
    color: "black",
    ".Partners__graphic": {
      gridArea: ["1/1/2/-1", "1/1/2/-1", "1/1/2/-1", "1/8/2/-1"],
      position: "relative",

      display: "flex",
      justifyContent: "center",
      alignItems: ["unset", "unset", "unset", "center"],
      div: {
        position: ["absolute", "absolute", "absolute", "relative"],
        width: [
          (t) => `calc(calc(${t.colWidthMob} * 4) + 60px)`,
          (t) => `calc(calc(${t.colWidthMob} * 4) + 60px)`,
          (t) => `calc(calc(${t.colWidthMob} * 4) + 60px)`,
          "288px",
        ],
        height: [
          (t) => `calc(calc(${t.colWidthMob} * 4) + 60px)`,
          (t) => `calc(calc(${t.colWidthMob} * 4) + 60px)`,
          (t) => `calc(calc(${t.colWidthMob} * 4) + 60px)`,
          "288px",
        ],
        top: [
          (t) => `calc(calc(calc(${t.colWidthMob} * 2) + 30px) / -1)`,
          (t) => `calc(calc(calc(${t.colWidthMob} * 2) + 30px) / -1)`,
          (t) => `calc(calc(calc(${t.colWidthMob} * 2) + 30px) / -1)`,
          "unset",
        ],
        left: [
          (t) => `calc(${t.colWidthMob} + 20px)`,
          (t) => `calc(${t.colWidthMob} + 20px)`,
          (t) => `calc(${t.colWidthMob} + 20px)`,
          0,
        ],
        div: {
          top: 0,
          left: 0,
          svg: {
            height: "100%",
            width: "100%",
          },
        },
      },
    },
    ".Partners__text": {
      gridArea: ["2/1/3/-1", "2/1/3/-1", "2/1/3/-1", "1/3/2/8"],
      mt: [
        (t) => `calc(calc(${t.colWidthMob} * 2) + 80px)`,
        (t) => `calc(calc(${t.colWidthMob} * 2) + 80px)`,
        (t) => `calc(calc(${t.colWidthMob} * 2) + 80px)`,
        18,
      ],
      mb: [10, 10, 10, 19],
      ".Partners__text-header": {
        ".Partners__text-header-text": {
          fontFamily: "display",
        },
      },
      ".Partners__text-body": {
        maxWidth: [
          "unset",
          (t) => t.tabletMaxSectionWidth,
          (t) => t.tabletMaxSectionWidth,
          (t) => t.desktopMaxSectionWidth,
        ],
        mt: [3, 3, 3, 4],
        ".Partners__text-body-text": {
          fontSize: ["16px"],
          lineHeight: ["24px"],
        },
      },

      ".Partners__link": {
        mt: [1],

        p: {
          mt: 0,
          fontFamily: "display",
          fontWeight: "500",
        },
      },
    },
  },
};
