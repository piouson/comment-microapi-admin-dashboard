import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { List, Datagrid, TextField, SimpleList } from "react-admin";
import Pagination from "../pagination/Pagination";
import Filter from "../pagination/Filter";

const ApplicationList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const filters = [
    {
      label: "Filter by name",
      source: "applicationName",
      alwaysOn: true,
    },
    {
      label: "Filter by organization",
      source: "organizationName",
    },
  ];

  return (
    <List
      label="Applications"
      title="Applications"
      pagination={<Pagination />}
      filters={<Filter filters={filters} />}
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
