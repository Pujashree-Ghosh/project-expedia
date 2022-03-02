import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import GoingTo from "../pages/GoingTo";
import { Provider } from "react-redux";
import store from "../redux/store";

const TestGoingTo = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GoingTo />
      </BrowserRouter>
    </Provider>
  );
};
describe(" Search Form Statement", () => {
  test("The form should be in the document. ", () => {
    const component = render(<TestGoingTo />);
    screen.debug();
  });
  test("Select field should be visible to the user ", () => {
    const component = render(<TestGoingTo />);
    // const destinationInputNode = component.getByPlaceholderText("Going To");
    const destinationInputNode = component.getByText(/Going To/i);

    expect(destinationInputNode).toBeVisible();
  });
  test("Select field should accept a value", () => {
    const component = render(<TestGoingTo />);
    const destinationInputNode = component.getByText(/Going To/i);
    expect(destinationInputNode.value).toMatch("");

    fireEvent.change(destinationInputNode, { target: { value: "Mumbai" } });
    expect(destinationInputNode.value).toMatch("Mumbai");
  });
  test("Select button should be visible to the user ", () => {
    const component = render(<TestGoingTo />);
    const searchbuttonNode = component.getByRole("button", {
      name: /Search Hotel/i,
    });
    expect(searchbuttonNode).toBeVisible();
  });
  test("User Should be able search hotel", () => {
    const mockFn = jest.fn();
    const { getByRole } = render(<TestGoingTo onClick={mockFn} />);
    const buttonNode = getByRole("button");
    fireEvent.search(buttonNode);
  });
});
