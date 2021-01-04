import {
  columnWidths,
  lineBreaks,
  rootMargin,
  rootMarginSub,
} from "../helpers/utils";

describe("rootMargin", () => {
  it("returns correct string for desktop", () => {
    expect(rootMargin(true, 200)).toBe("-94px 0px -106px 0px");
  });
  it("returns correct string for mobile", () => {
    expect(rootMargin(false, 200)).toBe("-74px 0px -126px 0px");
  });
});

describe("rootMarginSub", () => {
  it("returns correct string", () => {
    expect(rootMarginSub(400)).toBe("-200px 0px -200px 0px");
  });
});

describe("lineBreaks", () => {
  it("adds a line break by splitting on  n", () => {
    expect(JSON.stringify(lineBreaks("Hello\nNew Line"))).toBe(
      JSON.stringify([
        <span key={0}>
          Hello
          <br />
        </span>,
        <span key={1}>
          New Line
          <br />
        </span>,
      ])
    );
  });
});

describe("columnWidths", () => {
  it("calculates widths correctly", () => {
    expect(columnWidths(1000)).toBe({
      desktop: 40,
      mobile: 143.3,
    });
  });
});
