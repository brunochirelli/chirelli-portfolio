import React from "react";
import PageHeader from "../src/components/PageHeader";
import { render } from "../src/utils/test-utils";

describe("PageHeader basic functionalities", () => {
  it("should render right title", () => {
    const { getByTestId } = render(<PageHeader title="Page Title" />);
    expect(getByTestId("page-header")).toHaveTextContent("Page Title");
  });

  it("should distinguish between project types", () => {});
  it("should link right to external sources", () => {});
  it("should not display links when value is falsy", () => {});
});
