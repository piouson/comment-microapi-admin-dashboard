import * as React from "react";
import { shallow } from "enzyme";
import AdminShow from "../../../components/msadmins/AdminShow";
import { TextField } from "react-admin";

test("renders Dashboard", () => {
  const settings = shallow(<AdminShow />);
  const textField = settings.find(TextField);
  expect(textField.length).toBe(4);
});
