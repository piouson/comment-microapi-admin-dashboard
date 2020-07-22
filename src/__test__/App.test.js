import * as React from "react";
import { shallow } from "enzyme";
import App from "../App";

test("renders Dashboard", () => {
  const app = shallow(<App />);
  expect(app).toMatchSnapshot();
});
