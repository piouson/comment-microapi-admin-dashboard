import React from "react";
import { Filter, TextInput } from "react-admin";

const AdminFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search by Name" source="fullname" alwaysOn />
    <TextInput label="Search by Email" source="email" />
    <TextInput label="Search by Role" source="role" />
  </Filter>
);

export default AdminFilter;
