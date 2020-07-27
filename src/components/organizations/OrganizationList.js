import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { List, Datagrid, TextField, EmailField, SimpleList } from "react-admin";
import OrganizationFilter from "./OrganizationFilter";
import Pagination from "../pagination";

const OrganizationList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <List
      label="Organizations"
      title="Organizations"
      pagination={<Pagination />}
      filters={<OrganizationFilter />}
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
