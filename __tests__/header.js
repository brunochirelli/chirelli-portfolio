import React from "react"
import { render } from "@testing-library/react"

import Header from "../src/components/header"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = render(<Header siteTitle="Título" />)
    expect(tree).toMatchSnapshot()
  })
})
