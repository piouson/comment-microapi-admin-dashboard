import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { List, Datagrid, TextField, SimpleList, Pagination } from "react-admin";

const OrganizationPagination = (props) => (
  <Pagination rowsPerPageOptions={[10, 25, 50]} {...props} />
);

const OrganizationList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <List
      label="Organizations"
      title="Organizations"
      pagination={<OrganizationPagination />}
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
          <TextField label="Email" source="organizationEmail" />
        </Datagrid>
      )}
    </List>
  );
};

export default OrganizationList;
