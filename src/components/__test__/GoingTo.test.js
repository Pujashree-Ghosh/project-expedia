import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import GoingTo from "../pages/GoingTo";
const TestGoingTo = () => {
  return (
    <BrowserRouter>
      <GoingTo />
    </BrowserRouter>
  );
};
describe("SearchForm", () => {
  test("renders SearchForm", () => {
    render(<TestGoingTo />);
    expect(
      //   screen.getByRole("heading", { name: /location search/i })
      component.getByPlaceholderText(/Going To/i)
    ).toBeVisible();

    // expect(
    //   screen.getByRole("textbox", { name: /choose an origin \(optional\)/i })
    // ).toBeVisible();

    // expect(
    //   screen.getByRole("textbox", { name: /choose a destination/i })
    // ).toBeVisible();

    // expect(screen.getByRole("button", { name: /search/i })).toBeVisible();
  });
});
// test("Email field should be visible to the user ", () => {
//   const component = render(<TestSignIn />);
//   const emailInputNode = component.getByPlaceholderText(/Enter your email/i);
//   expect(emailInputNode).toBeVisible();
// });
