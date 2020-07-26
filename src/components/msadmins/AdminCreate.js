import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  PasswordInput,
  required,
} from "react-admin";
import { parse } from "querystring";

const AdminCreate = (props) => {
  const data = parse(props.location.search);
  console.log("AdminCreate", data);
  return (
    <Create label="Create" title="Create an Admin" {...props}>
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
