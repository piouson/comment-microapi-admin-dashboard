import * as React from "react";
import { shallow } from "enzyme";
import App from "../App";

test("Test App snapshot", () => {
  const app = shallow(<App />);
  expect(app).toMatchSnapshot();
});
