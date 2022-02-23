import React from "react";
import {
  render,
  screen,
  fireEvent,
  getByDisplayValue,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SignUpForm from "../pages/SignUpForm";

const TestSignUp = () => {
  return (
    <BrowserRouter>
      <SignUpForm />
    </BrowserRouter>
  );
};

describe("signup describe statement", () => {
  test("Sign Up form should be in the document. ", () => {
    const component = render(<TestSignUp />);
    screen.debug();
  });

  test("Email field should be visible to the user ", () => {
    const component = render(<TestSignUp />);
    const emailInputNode = component.getByPlaceholderText(/Enter your email/i);
    expect(emailInputNode).toBeVisible();
  });

  test("Email field should accept value", () => {
    const component = render(<TestSignUp />);
    // const { getbyText } = render(<TestSignUp />);
    const emailInputNode = component.getByPlaceholderText(/Enter your email/i);

    expect(emailInputNode.value).toMatch("");

    fireEvent.change(emailInputNode, { target: { value: "testing" } });
    expect(emailInputNode.value).toMatch("testing");
    const errorMessageNode = getByText(/Invalid Email./i);

    // const errorMessageNode = getByDisplayValue(/Invalid Email./i);
    expect(errorMessageNode).toBeInTheDocument();
  });

  test("Email field should have a value asd@gmail.com", () => {
    const component = render(<TestSignUp />);
    const emailInputNode = component.getByPlaceholderText(/Enter your email/i);
    fireEvent.change(emailInputNode, { target: { value: "asd@gmail.com" } });
    expect(emailInputNode.value).toBe("asd@gmail.com");
  });

  test("Firstname field should be visible to the user ", () => {
    const component = render(<TestSignUp />);
    const firstnameInputNode =
      component.getByPlaceholderText(/Enter your firstname/i);
    expect(firstnameInputNode).toBeVisible();
  });

  test("Firstname field should have a value pujashree", () => {
    const component = render(<TestSignUp />);
    const firstnameInputNode =
      component.getByPlaceholderText(/Enter your firstname/i);
    fireEvent.change(firstnameInputNode, { target: { value: "Pujashree" } });
    expect(firstnameInputNode.value).toBe("Pujashree");
  });

  test("Firstname field should be visible to the user ", () => {
    const component = render(<TestSignUp />);
    const firstnameInputNode =
      component.getByPlaceholderText(/Enter your firstname/i);
    expect(firstnameInputNode).toBeVisible();
  });

  test("Lastname field should have a value Ghosh", () => {
    const component = render(<TestSignUp />);
    const lastnameInputNode =
      component.getByPlaceholderText(/Enter your lastname/i);
    fireEvent.change(lastnameInputNode, { target: { value: "Ghosh" } });
    expect(lastnameInputNode.value).toBe("Ghosh");
  });

  test("User Should be able to submit the form", () => {
    const mockFn = jest.fn();
    const { getByRole } = render(<TestSignUp handleSubmit={mockFn} />);
    const buttonNode = getByRole("button");
    fireEvent.submit(buttonNode);
    expect(mockFn).toHaveBeenCalled();

    // expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
