import React from "react";
import { Edit, TextInput, SimpleForm, required } from "react-admin";

const ProfileEdit = ({ staticContext, ...props }) => {
  return (
    <Edit
      id="profile"
      resource="profile"
      basePath="/profile"
      redirect={false}
      title="My Profile"
      {...props}
    >
      <SimpleForm>
        <TextInput source="fullname" validate={required()} />
        <TextInput source="email" validate={required()} />
        <TextInput source="role" validate={required()} />
      </SimpleForm>
    </Edit>
  );
};

export default ProfileEdit;
