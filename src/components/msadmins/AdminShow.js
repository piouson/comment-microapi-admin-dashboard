import React from "react";
import { Show, SimpleShowLayout, TextField } from "react-admin";

const AdminShow = (props) => (
  <Show label="Show" {...props}>
    <SimpleShowLayout>
      <TextField label="Full Name" source="fullname" />
      <TextField source="email" />
      <TextField source="password" />
      <TextField source="role" />
    </SimpleShowLayout>
  </Show>
);

export default AdminShow;
