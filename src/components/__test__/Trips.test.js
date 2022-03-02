import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Trips from "../pages/Trips";
import { Provider } from "react-redux";
import store from "../redux/store";

const TestTrips = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Trips />
      </BrowserRouter>
    </Provider>
  );
};
describe(" Trips Statement", () => {
  test("It should be in the document. ", () => {
    const component = render(<TestTrips />);
    screen.debug();
  });

  test("renders a <button>", () => {
    const renderedComponent = shallow(<Button></Button>);
    expect(renderedComponent.find("button").node).toExist();
  });
});
describe("<Button/>", () => {
  test("renders a <button/>", () => {});
  test("renders it's children", () => {});
  test("handle clicks", () => {});

  test("renders a <button>", () => {
    const renderedComponent = shallow(<Button></Button>);
    expect(renderedComponent.find("button").node).toExist();
  });
});
