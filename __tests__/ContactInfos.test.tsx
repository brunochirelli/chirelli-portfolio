import React from "react";

import { render } from "../src/utils/test-utils";

import ContactInfos from "../src/components/ContactInfos";

test("should link to socials or email", () => {
  const { getAllByRole } = render(<ContactInfos />);
  const links = getAllByRole("link");

  expect(links[0]).toHaveAttribute(
    "href",
    "https://linkedin.com/in/BrunoChirelli"
  );
  expect(links[0]).toHaveAttribute("target", "_blank");
  expect(links[1]).toHaveAttribute("href", "https://github.com/BrunoChirelli");
  expect(links[1]).toHaveAttribute("target", "_blank");
  expect(links[2]).toHaveAttribute("href", "mailto:bruno@chirelli.com.br");
  expect(links[2]).toHaveAttribute("target", "_blank");
});
