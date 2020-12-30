import React from "react";

import { render } from "../src/utils/test-utils";
import Header from "../src/components/Header";

test("should contain the right name and link", () => {
  const mock = jest.fn();

  const { getByTestId } = render(
    <Header
      pageLabel="Home"
      lang="PT-BR"
      setLang={mock}
      open={true}
      onOpen={mock}
      onClose={mock}
    />
  );

  expect(getByTestId("logo")).toHaveTextContent(/^Bruno Chirelli$/);
  expect(getByTestId("logo")).toHaveAttribute("href", "/");
});
