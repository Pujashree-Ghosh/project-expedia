import React from "react";
import {
  render,
  screen,
  fireEvent,
  getByDisplayValue,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn";

const TestSignIn = () => {
  return (
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>
  );
};

describe("signin describe statement", () => {
  test("Sign In form should be in the document. ", () => {
    const component = render(<TestSignIn />);
    screen.debug();
  });

  test("Email field should be visible to the user ", () => {
    const component = render(<TestSignIn />);
    const emailInputNode = component.getByPlaceholderText(/Enter your email/i);
    expect(emailInputNode).toBeVisible();
  });

  test("Email field should accept value", () => {
    const component = render(<TestSignIn />);
    // const { getbyText } = render(<TestSignIn />);
    const emailInputNode = component.getByPlaceholderText(/Enter your email/i);

    expect(emailInputNode.value).toMatch("");

    fireEvent.change(emailInputNode, { target: { value: "testing" } });
    expect(emailInputNode.value).toMatch("testing");
    // const errorMessageNode = getByText(/Invalid Email./i);

    // const errorMessageNode = getByDisplayValue(/Invalid Email./i);
    // expect(errorMessageNode).toBeInTheDocument();
  });

  test("Email field should have a value asd@gmail.com", () => {
    const component = render(<TestSignIn />);
    const emailInputNode = component.getByPlaceholderText(/Enter your email/i);
    fireEvent.change(emailInputNode, { target: { value: "asd@gmail.com" } });
    expect(emailInputNode.value).toBe("asd@gmail.com");
  });

  test("User Should be able to submit the form", () => {
    const mockFn = jest.fn();
    const { getByRole } = render(<TestSignIn handleSubmit={mockFn} />);
    const buttonNode = getByRole("button");
    fireEvent.submit(buttonNode);
    // expect(mockFn).toHaveBeenCalled();

    // expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
