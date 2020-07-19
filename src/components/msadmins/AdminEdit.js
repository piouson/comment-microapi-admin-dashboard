import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const AdminEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput label="Full Name" source="fullname" />
      <TextInput disabled source="email" />
      <TextInput disabled source="role" />
    </SimpleForm>
  </Edit>
);

export default AdminEdit;
