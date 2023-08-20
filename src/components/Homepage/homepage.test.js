import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Homepage from "./Homepage";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store/store";

test("testing homepage", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Homepage />
      </Provider>
    </BrowserRouter>
  );
  const incrediblesPosterImg = screen.getByAltText(/heropage/i);
  expect(incrediblesPosterImg).toBeInTheDocument();
});
