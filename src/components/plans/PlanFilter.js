import React from "react";
import { Filter, TextInput } from "react-admin";

const PlanFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search by Name" source="planName" alwaysOn />
  </Filter>
);

export default PlanFilter;
