import React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
  ReferenceField,
  TopToolbar,
  DeleteButton,
} from "react-admin";

const ApplicationShowActions = ({ basePath, data, resource }) => (
  <TopToolbar>
    <DeleteButton basePath={basePath} record={data} resource={resource} />
  </TopToolbar>
);

const ApplicationShow = (props) => (
  <Show label="Show" title="" actions={<ApplicationShowActions />} {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField label="Name" source="applicationName" />
      <TextField label="Organization ID" source="orgId" />
      <ReferenceField
        link="show"
        label="Organization"
        source="orgId"
        reference="Organizations"
      >
        <TextField source="organizationName" />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);

export default ApplicationShow;
