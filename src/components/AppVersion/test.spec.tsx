import { render, screen } from "@testing-library/react";

import pkg from "../../../package.json";

import AppVersion from ".";

const appVersion = pkg.version;
const reactVersion = pkg.dependencies.react.replace("^", "");

describe("Should render <AppVersion/>", () => {
  beforeEach(() => {
    render(<AppVersion />);
  });
  it("renders AppVersion", () => {
    expect(screen.getByTestId("app-version")).toBeInTheDocument();
  });
  it("AppVersion validation version react-techs-logos", () => {
    expect(screen.getByTestId("app-version").textContent).toBe(
      `react-techs-logos ${appVersion}`
    );
  });
  it("AppVersion validation version React", () => {
    expect(screen.getByTestId("react-version").textContent).toBe(
      `React ${reactVersion}`
    );
  });
});
