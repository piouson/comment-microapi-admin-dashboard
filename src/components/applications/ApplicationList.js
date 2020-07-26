import React from "react";
import { useMediaQuery } from "@material-ui/core";
import {
  List,
  Datagrid,
  TextField,
  SimpleList,
  Pagination,
  ReferenceField,
} from "react-admin";

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
          linkType="show"
          primaryText={(record) => record.applicationName}
          secondaryText={(record) => record.orgId}
          tertiaryText={(record) => record.organizationName}
        />
      ) : (
        <Datagrid rowClick="show">
          <TextField label="Name" source="applicationName" />
          <TextField label="ID" source="id" />
          <ReferenceField
            link="show"
            label="Organization"
            source="orgId"
            reference="Organizations"
          >
            <TextField label="Organization Name" source="organizationName" />
          </ReferenceField>
        </Datagrid>
      )}
    </List>
  );
};

export default ApplicationList;
