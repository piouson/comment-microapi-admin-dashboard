import React from "react";
import { Filter, TextInput } from "react-admin";

export default ({ filters, ...props }) => (
  <Filter {...props}>
    {filters.map((filter) => (
      <TextInput
        label={filter.label}
        source={filter.source}
        alwaysOn={filter.alwaysOn || false}
      />
    ))}
  </Filter>
);
