import React from "react";
import { Filter, TextInput } from "react-admin";

const ApplicationFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search by Name" source="applicationName" alwaysOn />
    <TextInput label="Search by Organization" source="organizationName" />
  </Filter>
);

export default ApplicationFilter;
