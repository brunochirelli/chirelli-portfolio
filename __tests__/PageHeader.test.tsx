import React from "react";
import PageHeader from "../src/components/PageHeader";
import { render } from "../src/utils/test-utils";

test("it renders", () => {
  const { getByTestId } = render(<PageHeader title="Page Title" />);
  expect(getByTestId("page-header")).toHaveTextContent("Page Title");
});
