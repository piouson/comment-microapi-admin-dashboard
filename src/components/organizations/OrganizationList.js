import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { List, Datagrid, TextField, EmailField, SimpleList } from "react-admin";
import Pagination from "../pagination/Pagination";
import Filter from "../pagination/Filter";

const OrganizationList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const filters = [
    {
      label: "Filter by name",
      source: "organizationName",
      alwaysOn: true,
    },
    {
      label: "Filter by email",
      source: "organizationEmail",
    },
  ];

  return (
    <List
      label="Organizations"
      title="Organizations"
      pagination={<Pagination />}
      filters={<Filter filters={filters} />}
      {...props}
    >
      {isSmall ? (
        <SimpleList
          linkType="show"
          primaryText={(record) => record.organizationName}
          secondaryText={(record) => `${record.organizationEmail}`}
        />
      ) : (
        <Datagrid rowClick="show">
          <TextField label="Name" source="organizationName" />
          <EmailField label="Email" source="organizationEmail" />
        </Datagrid>
      )}
    </List>
  );
};

export default OrganizationList;
