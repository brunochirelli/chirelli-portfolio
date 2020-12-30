import React from "react";

import { render } from "../src/utils/test-utils";
import Header from "../src/components/Header";

beforeEach(() => {
  const mock = jest.fn();

  render(
    <Header
      pageLabel="Home"
      lang="PT-BR"
      setLang={mock}
      open={true}
      onOpen={mock}
      onClose={mock}
    />
  );
});

test("should contain the right name and link to home", () => {
  const { getByTestId } = render();
  expect(getByTestId("logo")).toHaveTextContent(/^Bruno Chirelli$/);
  expect(getByTestId("logo")).toHaveAttribute("href", "/");
});

test("should link to social page", () => {
  const { getAllByTestId } = render();

  const socialLinks = getAllByTestId("header-social");

  expect(socialLinks[0]).toHaveAttribute(
    "href",
    "https://linkedin.com/in/BrunoChirelli"
  );
  expect(socialLinks[1]).toHaveAttribute(
    "href",
    "https://github.com/BrunoChirelli"
  );
});
