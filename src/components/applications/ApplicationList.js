import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { List, Datagrid, TextField, SimpleList, Pagination } from "react-admin";

const ApplicationPagination = (props) => (
  <Pagination rowsPerPageOptions={[10, 25, 50]} {...props} />
);

const ApplicationList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <List
      label="Applications"
      title="Applications"
      pagination={<ApplicationPagination />}
      {...props}
    >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.applicationName}
          secondaryText={(record) => record.orgId}
          tertiaryText={(record) => record.organizationName}
        />
      ) : (
        <Datagrid rowClick="show">
          <TextField source="id" />
          <TextField source="applicationName" />
          <TextField source="orgId" />
          <TextField source="organizationName" />
        </Datagrid>
      )}
    </List>
  );
};

export default ApplicationList;
