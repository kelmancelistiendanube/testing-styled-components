import * as React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import "jest-styled-components";
import App from "./index";

afterEach(cleanup);

describe("App", () => {
  it("shows correct color with colorcode", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("CompA-D")).toHaveStyle("background: #20aee5");
    expect(getByTestId("CompB-D")).toHaveStyleRule("background", "#c42b2b");
  });
  it("shows correct color with colorname", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("CompA-C")).toHaveStyleRule("background", "skyblue;");
    expect(getByTestId("CompB-C")).toHaveStyleRule("background", "tomato");
  });
});
