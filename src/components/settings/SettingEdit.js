import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const SettingEdit = (props) => (
  <Edit label="Settings" {...props}>
    <SimpleForm>
      <TextInput label="Requests per Minute (max)" source="maxRequestsPerMin" />
      <TextInput
        disabled
        label="Items per Page (default)"
        source="maxItemsPerPage"
      />
      <TextInput label="Items per Page (max)" source="defaultItemsPerPage" />
    </SimpleForm>
  </Edit>
);

export default SettingEdit;
