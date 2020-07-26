import React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
  TopToolbar,
  DeleteButton,
  EditButton,
} from "react-admin";

const AdminShowActions = ({ basePath, data, resource }) => (
  <TopToolbar>
    <EditButton basePath={basePath} record={data} />
    <DeleteButton basePath={basePath} record={data} resource={resource} />
  </TopToolbar>
);

const AdminShow = (props) => (
  <Show label="Show" title="" actions={<AdminShowActions />} {...props}>
    <SimpleShowLayout>
      <TextField label="Name" source="fullname" />
      <TextField source="email" />
      <TextField source="password" />
      <TextField source="role" />
    </SimpleShowLayout>
  </Show>
);

export default AdminShow;
