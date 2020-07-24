import React from "react";
import { Show, SimpleShowLayout, TextField } from "react-admin";

const ApplicationShow = (props) => (
  <Show label="Show" title="" {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField label="Name" source="applicationName" />
      <TextField label="Organization ID" source="orgId" />
      <TextField label="Organization Name" source="organizationName" />
    </SimpleShowLayout>
  </Show>
);

export default ApplicationShow;
