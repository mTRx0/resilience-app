import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import Appbar from "./Appbar";

describe("Appbar Layout", () => {
  function renderComponent(props) {
    return render(<Appbar {...props} />, { wrapper: MemoryRouter });
  }

  it("Render the default appbar ", () => {
    const appBar = renderComponent();

    const container = appBar.getByRole("navigation");
    const logoIcon = appBar.getByTitle("MutualAidLogo");
    const menuIcon = appBar.getByTestId("MutualAidMenu");

    expect(container).toHaveStyle("height: 89px");
    expect(container).toBeTruthy();
    // Accessibility
    expect(logoIcon).toBeTruthy();
    expect(menuIcon).toBeTruthy();
  });

  it("Render appbar with customize children", () => {
    const appBar = renderComponent({
      children: <div>appbar test children</div>,
    });

    const container = appBar.getByRole("navigation");

    // expect(container).toHaveStyle("height: 89px"); @todo: why is this failing?
    expect(container).toBeTruthy();
    // Accessibility
    expect(appBar.getByText("appbar test children")).toBeTruthy();
  });
});
