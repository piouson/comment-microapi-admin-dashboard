import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { List, Datagrid, TextField, SimpleList } from "react-admin";
import ApplicationFilter from "./ApplicationFilter";
import Pagination from "../pagination";

const ApplicationList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <List
      label="Applications"
      title="Applications"
      pagination={<Pagination />}
      filters={<ApplicationFilter />}
      {...props}
    >
      {isSmall ? (
        <SimpleList
          linkType="show"
          primaryText={(record) => record.applicationName}
        />
      ) : (
        <Datagrid rowClick="show">
          <TextField label="Name" source="applicationName" />
          <TextField label="Organization Name" source="organizationName" />
        </Datagrid>
      )}
    </List>
  );
};

export default ApplicationList;
