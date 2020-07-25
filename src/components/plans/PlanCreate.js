import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  SelectInput,
  NumberInput,
  required,
} from "react-admin";

const PlanCreate = (props) => {
  return (
    <Create label="Create" title="Create a Plan" {...props}>
      <SimpleForm redirect="show">
        <TextInput label="Name" source="name" validate={[required()]} />
        <BooleanInput label="Logging" source="logging" />
        <NumberInput
          label="Maximum Log Retention Period (Days)"
          source="maxLogRetentionPeriod"
        />
        <SelectInput
          source="periodWeight"
          validate={[required()]}
          choices={[
            { id: 1, name: "Monthly" },
            { id: 3, name: "Quarterly" },
            { id: 12, name: "Yearly" },
          ]}
        />
        <NumberInput
          label="Maximum requests per day"
          source="maxRequestPerDay"
        />
        <NumberInput
          label="Maximum requests per minute"
          source="maxRequestPerMin"
        />
      </SimpleForm>
    </Create>
  );
};

export default PlanCreate;
