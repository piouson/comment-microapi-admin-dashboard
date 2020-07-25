import React from "react";
import { useMediaQuery } from "@material-ui/core";
import {
  List,
  Datagrid,
  TextField,
  SimpleList,
  TopToolbar,
  CreateButton,
  ExportButton,
} from "react-admin";

const PlanListActions = ({ basePath, data, resource }) => (
  <TopToolbar>
    <CreateButton basePath={basePath} />
    <ExportButton basePath={basePath} record={data} resource={resource} />
  </TopToolbar>
);

const PlanList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <List
      label="Plans"
      title="Plans"
      actions={<PlanListActions />}
      pagination={null}
      {...props}
    >
      {isSmall ? (
        <SimpleList linkType="show" primaryText={(record) => record.planName} />
      ) : (
        <Datagrid rowClick="show">
          <TextField label="Name" source="planName" />
          <TextField label="ID" source="id" />
        </Datagrid>
      )}
    </List>
  );
};

export default PlanList;
