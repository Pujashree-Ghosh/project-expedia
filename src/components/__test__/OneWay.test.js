import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import OneWay from "../pages/OneWay";
import { Provider } from "react-redux";
import store from "../redux/store";

const TestOneWay = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <OneWay />
      </BrowserRouter>
    </Provider>
  );
};
describe(" Search Form Statement", () => {
  test("The form should be in the document. ", () => {
    const component = render(<TestOneWay />);
    screen.debug();
  });
  test("Origin field should be visible to the user ", () => {
    const component = render(<TestOneWay />);
    // const destinationInputNode = component.getByPlaceholderText("Going To");
    const destinationInputNode = component.getByText(/Going From/i);

    expect(destinationInputNode).toBeVisible();
  });
  test("Destination field should be visible to the user ", () => {
    const component = render(<TestOneWay />);
    // const destinationInputNode = component.getByPlaceholderText("Going To");
    const destinationInputNode = component.getByText(/Going To/i);

    expect(destinationInputNode).toBeVisible();
  });

  test("Select button should be visible to the user ", () => {
    const component = render(<TestOneWay />);
    const searchbuttonNode = component.getByRole("button", {
      name: /Search Flight/i,
    });
    expect(searchbuttonNode).toBeVisible();
  });
});
