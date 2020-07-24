import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { List, Datagrid, TextField, EmailField, SimpleList } from "react-admin";

const ApplicationList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <List label="Applications" title="Applications" {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.applicationName}
          secondaryText={(record) => record.orgId}
          tertiaryText={(record) => record.organizationName}
        />
      ) : (
        <Datagrid rowClick="show" isRowSelectable={(record) => false}>
          <TextField source="id" />
          <TextField source="applicationName" />
          <EmailField source="orgId" />
          <TextField source="organizationName" />
        </Datagrid>
      )}
    </List>
  );
};

export default ApplicationList;
