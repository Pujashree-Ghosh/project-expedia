import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import { Provider } from "react-redux";
import store from "../redux/store";

const TestHome = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  );
};
describe(" Landing Page Statement", () => {
  test("Landing page should be in the document. ", () => {
    const component = render(<TestHome />);
    screen.debug();
  });

  test("Renders expedia rewards link ", () => {
    const component = render(<TestHome />);
    const linkElement = component.getByRole("link", { name: /Learn More/i });

    expect(linkElement).toBeInTheDocument();
  });
});
