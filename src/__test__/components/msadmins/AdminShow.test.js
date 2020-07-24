import * as React from "react";
import { shallow } from "enzyme";
import AdminShow from "../../../components/msadmins/AdminShow";
import { TextField } from "react-admin";

describe("AdminShow", () => {
  test("TextField count", () => {
    const adminShow = shallow(<AdminShow />);
    const textField = adminShow.find(TextField);
    expect(textField.length).toBe(4);
  });
});
