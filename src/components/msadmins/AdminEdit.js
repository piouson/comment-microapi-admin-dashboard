import React from "react";
import { Edit, SimpleForm, TextInput, SaveButton, Toolbar } from "react-admin";

const CustomToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

const AdminEdit = (props) => (
  <Edit {...props}>
    <SimpleForm toolbar={<CustomToolbar />}>
      <TextInput label="Full Name" source="fullname" />
      <TextInput disabled source="email" />
      <TextInput disabled source="role" />
    </SimpleForm>
  </Edit>
);

export default AdminEdit;
