import React from "react";
import { Show, SimpleShowLayout, TextField } from "react-admin";

const SettingShow = (props) => (
  <Show label="Settings" title="Settings" {...props}>
    <SimpleShowLayout>
      <TextField label="Requests per Minute (max)" source="maxRequestsPerMin" />
      <TextField label="Items per Page (default)" source="maxItemsPerPage" />
      <TextField label="Items per Page (max)" source="defaultItemsPerPage" />
    </SimpleShowLayout>
  </Show>
);

export default SettingShow;
