import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  PasswordInput,
  required,
} from "react-admin";

const AdminCreate = (props) => {
  return (
    <Create label="Create" {...props}>
      <SimpleForm redirect="show">
        <TextInput
          label="Full Name"
          source="fullname"
          validate={[required()]}
        />
        <TextInput source="email" validate={[required()]} />
        <PasswordInput source="password" validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};

export default AdminCreate;
