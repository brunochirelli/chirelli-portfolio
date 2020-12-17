import React from "react"
import Layout from "../src/components/layout"
import { render } from "@testing-library/react"

beforeEach(() => render(<Layout>Content</Layout>))

// describe("Layout", () => {
//   it("renders correctly", () => {
//     const tree = render(<Layout>Content</Layout>)
//     expect(tree).toMatchSnapshot()
//   })
// })

describe("should keep structure semantic", () => {
  it("should contain header", () => {
    const header = document.querySelector("header")
    expect(header).toBeInTheDocument()
  })

  it("should contain main", () => {
    const main = document.querySelector("main")
    expect(main).toBeInTheDocument()
  })

  it("should contain footer", () => {
    const footer = document.querySelector("footer")
    expect(footer).toBeInTheDocument()
  })
})
