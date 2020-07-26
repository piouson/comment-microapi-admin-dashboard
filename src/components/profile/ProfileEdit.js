import React from "react";
import {
  Edit,
  TextInput,
  SimpleForm,
  Toolbar,
  SaveButton,
  required,
} from "react-admin";

const CustomToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

const ProfileEdit = ({ staticContext, ...props }) => {
  return (
    <Edit
      id="edit"
      resource="profile"
      basePath="/profile/edit"
      redirect="show"
      title="My Profile"
      {...props}
    >
      <SimpleForm
        redirect="show"
        toolbar={<CustomToolbar />}
        warnWhenUnsavedChanges
      >
        <TextInput
          disabled
          label="Full Name"
          source="fullname"
          validate={required()}
        />
        <TextInput disabled source="email" />
        <TextInput disabled source="role" />
      </SimpleForm>
    </Edit>
  );
};

export default ProfileEdit;
