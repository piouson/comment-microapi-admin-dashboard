import React from "react";
import { Filter, TextInput } from "react-admin";

const OrganizationFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search by Name" source="organizationName" alwaysOn />
    <TextInput label="Search by Email" source="organizationEmail" />
  </Filter>
);

export default OrganizationFilter;
