import React from "react";
import {
  Show,
  TabbedShowLayout,
  Tab,
  TextField,
  BooleanField,
  TopToolbar,
  DeleteButton,
} from "react-admin";

const PlanShowActions = ({ basePath, data, resource }) => (
  <TopToolbar>
    <DeleteButton basePath={basePath} record={data} resource={resource} />
  </TopToolbar>
);

const PlanShow = (props) => {
  return (
    <Show label="Show" title="" actions={<PlanShowActions />} {...props}>
      <TabbedShowLayout>
        <Tab label="details">
          <TextField label="Name" source="planName" />
        </Tab>
        <Tab label="logging">
          <BooleanField
            source="logging"
            valueLabelTrue="Logging has been enabled."
            valueLabelFalse="Logging is not enabled."
          />
          <TextField
            label="Maximum log retention period"
            source="maxLogRetentionPeriod"
          />
          <TextField label="Period weight" source="periodWeight" />
        </Tab>
        <Tab label="requests">
          <TextField
            label="Maximum requests per day"
            source="maxRequestPerDay"
          />
          <TextField
            label="Maximum requests per minute"
            source="maxRequestPerMin"
          />
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
};

export default PlanShow;
