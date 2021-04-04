import { home } from "./src/styling/home";
import { payequity } from "./src/styling/values/payequity";
import { navigation } from "./src/styling/navigation";
import { mobileNavigation } from "./src/styling/mobilenavigation";
import { navBarVariants } from "./src/styling/navbarvariants";
import { submenu } from "./src/styling/submenu";
import { subnavigation } from "./src/styling/subnavigation";
import { leadership } from "./src/styling/values/leadership";
import { deimetrics } from "./src/styling/values/deimetrics";
import { root } from "./src/styling/root";
import { buttons } from "./src/styling/buttons";
import { categories } from "./src/styling/categories";
import { standardModule } from "./src/styling/standardmodule";
import { quote } from "./src/styling/quote";
import { containers } from "./src/styling/containers";
import { section } from "./src/styling/section";
import { quotetext } from "./src/styling/quotetext";
import { quoteimage } from "./src/styling/quoteimage";
import { textBlockAndLinks } from "./src/styling/textblock_and_links";
import { discover } from "./src/styling/product/discover";
import { reporting } from "./src/styling/product/reporting";
import { datacollection } from "./src/styling/product/datacollection";
import { learnMoreLink } from "./src/styling/learnmorelink";
import { pricing } from "./src/styling/pricing";
import { board } from "./src/styling/community/board";
import { partners } from "./src/styling/community/partners";
import { people } from "./src/styling/people";
import { integrations } from "./src/styling/product/integrations";
import { header } from "./src/styling/header";
import { deijourney } from "./src/styling/values/deijourney";
import { security } from "./src/styling/product/security";
import { support } from "./src/styling/community/support";
import { mobilemenu } from "./src/styling/mobilemenu";
import { footer } from "./src/styling/footer";
import { button } from "./src/styling/button";
import { carousel } from "./src/styling/carousel";

const theme = {
  breakpoints: ["500px", "768px", "1024px", "1500px", "2000px"],
  fonts: {
    body: '"Dandi Grotesk", sans-serif',
    display: '"Dandi Grotesk Display", sans-serif',
    medium: '"Dandi Grotesk Medium", sans-serif',
  },
  space: [
    0,
    8,
    16,
    24,
    32,
    40,
    48,
    56,
    64,
    72,
    80,
    88,
    96,
    104,
    112,
    120,
    128,
    136,
    144,
    152,
    160,
    168,
    176,
    184,
    192,
    200,
    208,
    216,
    224,
    232,
    240,
  ],
  fontWeights: {
    normal: 500,
    bold: 500,
  },
  fontSizes: {
    heading1: ["36px", "36px", "36px", "60px"],
    heading2: ["32px", "32px", "32px", "40px"],
    heading3: ["28px"],
    heading4: ["18px"],
    body: ["16px", "16px", "16px", "20px"],
    small: ["13px"],
    nav: ["14px"],
  },
  lineHeights: {
    heading1: ["43.2px", "43.2px", "43.2px", "64px"],
    heading2: ["38.4px", "38.4px", "38.4px", "48px"],
    heading3: ["32px"],
    heading4: ["26px"],
    body: ["24px", "24px", "24px", "32px"],
    small: ["15.34px"],
  },
  colors: {
    black: "#1A1A1D",
    grey: "#909095",
    white: "#f2f2f2",
    lightGray: "#F8F8F8",
    clearWhite: "#FFFFFF",
    orange: "#FF9133",
    yellow: "#FFD93B",
    lightYellow: "#FBF792",
    darkTurquoise: "#1A1A1D",
    turquoise: "#A4F0F4",
    lightTurquoise: "#DFFFFF",
    darkBlue: "#0227C5",
    blue: "#335AFF",
    lightBlue: "#C6D9FF",
    darkViolet: "#A837F8",
    violet: "#F9D2FF",
    lightViolet: "#FDF1FF",
  },
  desktopMaxSectionWidth: "475px",
  tabletMaxSectionWidth: "650px",
  desktopBigGutters: `calc(100vw * .12)`,
  desktopMassiveGutters: `calc(100vw*.175)`,
  desktopGutters: `40px`,
  mobileGutters: `20px`,
  colWidthMob: `calc(calc(100vw - 140px)/6)`,
  colWidthTablet: `calc(calc(100vw - 180px)/6)`,
  colWidthDesktop: `calc(calc(calc(100vw - 440px) - 80px)/12)`,
  colWidthDesktopBig: `calc(calc(100vw - calc(calc(calc(100vw * .12) * 2) + 440px)) / 12)`,
  colWidthDesktopMassive: `calc(calc(100vw - calc(calc(calc(100vw * .175) * 2) + 440px)) / 12)`,
  desktopSectionWidth: `calc(calc(calc(calc(calc(100vw - 440px) - 80px) /12) * 4) + 160px)`,
  desktopSectionWidthBig: `calc(calc(calc(calc(calc(100vw - 440px) - calc(calc(100vw * .12) * 2)) / 12) * 4) + 160px)`,
  desktopSectionWidthMassive: `calc(calc(calc(calc(calc(100vw - 440px) - calc(calc(100vw * .175) * 2)) / 12) * 4) + 160px)`,
  grid: {
    display: "grid",
    gridTemplateColumns: [
      "repeat(6,1fr)",
      "repeat(6,1fr)",
      "repeat(6,1fr)",
      "repeat(12,1fr)",
    ],
    gridTemplateRows: "auto",
    columnGap: ["20px", "20px", "20px", "40px"],
    rowGap: 0,
    mx: [
      (t) => t.mobileGutters,
      (t) => t.mobileGutters,
      (t) => t.desktopGutters,
      (t) => t.desktopGutters,
      (t) => t.desktopBigGutters,
      (t) => t.desktopMassiveGutters,
    ],
  },
  pages: {
    home: { ...home },
    values: {
      deimetrics: { ...deimetrics },
      payequity: { ...payequity },
      deijourney: { ...deijourney },
      leadership: { ...leadership },
    },
    product: {
      discover: { ...discover },
      reporting: { ...reporting },
      datacollection: { ...datacollection },
      security: { ...security },
      integrations: { ...integrations },
    },
    pricing: { ...pricing },
    community: {
      board: { ...board },
      partners: { ...partners },
      support: { ...support },
    },
  },
  components: {
    containers: { ...containers },
    quotetext: { ...quotetext },
    quoteimage: { ...quoteimage },
    textBlockAndLinks: { ...textBlockAndLinks },
    navigation: { ...navigation },
    mobileNavigation: { ...mobileNavigation },
    navBarVariants: { ...navBarVariants },
    submenu: { ...submenu },
    mobilemenu: { ...mobilemenu },
    section: { ...section },
    standardModule: { ...standardModule },
    categories: { ...categories },
    subnavigation: { ...subnavigation },
    footer: { ...footer },
    learnMoreLink: { ...learnMoreLink },
    quote: { ...quote },
    shared: {
      button: { ...button },
      header: { ...header },
      carousel: { ...carousel },
      people: { ...people },
    },
  },
  forms: {
    input: {
      height: ["64px"],
      bg: "#262629",
      px: [3],
      mb: ["12px"],
      borderRadius: "8px",
      border: "none",
      fontFamily: "body",
      fontWeight: "400",
      fontSize: ["18px"],
      color: "white",
      ":focus": {
        outline: "none",
      },
      "::placeholder": {
        color: "rgba(242, 242, 242, 0.24)",
      },
    },
    select: {
      // A reset of styles, including removing the default dropdown arrow
      appearance: "none",
      // Additional resets for further consistency
      border: "none",
      borderRadius: "8px",
      // p: " 0 1em 0 0",
      mb: ["12px"],
      px: ["24px"],
      width: "100%",
      height: ["64px"],
      fontFamily: "body",
      fontSize: ["18px"],
      cursor: "pointer",
      lineHeight: "inherit",
      outline: "none",
      bg: "#262629",
      color: "white",
      option: {},
    },
  },
  buttons: { ...buttons },
  styles: {
    root: { ...root },
    h1: {
      fontFamily: "display",
      fontSize: ["32px", "32px", "32px", "60px"],
      lineHeight: ["38.4px", "38.4px", "38.4px", "64px"],
      fontWeight: "500",
      m: 0,
    },
    h2: {
      fontFamily: "display",
      fontSize: ["32px", "32px", "34px", "40px"],
      lineHeight: ["38.4px", "38.4px", "40px", "48px"],
      fontWeight: "500",
      m: 0,
    },
    h3: {
      fontFamily: "body",
      fontSize: ["24px"],
      lineHeight: ["24px"],
      fontWeight: "500",
      m: 0,
    },
    h4: {
      fontFamily: "body",
      fontSize: ["18px"],
      lineHeight: ["30px"],
      fontWeight: ["400"],
      m: 0,
    },
    p: {
      fontFamily: "body",
      fontSize: ["16px"],
      lineHeight: ["24px"],
      fontWeight: "400",
      m: 0,
    },
    h5: {
      fontFamily: "body",
      fontSize: "small",
      lineHeight: "small",
      fontWeight: "normal",
      m: 0,
    },
  },
};

export default theme;
