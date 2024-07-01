import { render, screen } from "@testing-library/react";

import AppFooter from ".";

import pkg from "../../../package.json";

const appVersion = pkg.version;
const reactVersion = pkg.dependencies.react.replace("^", "");

describe("Should render <AppFooter/>", () => {
  it("renders footer with credits and link", () => {
    render(<AppFooter />);

    const title: any = screen.getByTestId("app-footer");

    expect(title.querySelector("a").href).toBe(
      "https://github.com/criar-art/react-techs-logos"
    );
    expect(title.querySelector("a").textContent).toBe(
      `React ${reactVersion}react-techs-logos ${appVersion}@lucasferreiralimax`
    );
  });
});
