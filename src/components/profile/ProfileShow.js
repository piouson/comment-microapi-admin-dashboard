import React from "react";
import { Show, SimpleShowLayout, TextField } from "react-admin";

const ProfileShow = ({ staticContext, ...props }) => (
  <Show
    id="profile"
    resource="profile"
    basePath="/profile"
    title="My Profile"
    redirect="false"
    {...props}
  >
    <SimpleShowLayout redirect="false">
      <TextField label="Full Name" source="fullname" />
      <TextField source="email" />
      <TextField source="role" />
    </SimpleShowLayout>
  </Show>
);

export default ProfileShow;
