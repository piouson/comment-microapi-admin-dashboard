import React from "react";
import { useMediaQuery } from "@material-ui/core";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  SimpleList,
  TopToolbar,
  ExportButton,
  CreateButton,
} from "react-admin";

const AdminListActions = ({ basePath, data, resource }) => (
  <TopToolbar>
    <CreateButton basePath={basePath} />
    <ExportButton basePath={basePath} record={data} resource={resource} />
  </TopToolbar>
);

const AdminList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <List
      label="Admins"
      title="Admins"
      actions={<AdminListActions />}
      {...props}
    >
      {isSmall ? (
        <SimpleList
          linkType="show"
          primaryText={(record) => record.fullname}
          secondaryText={(record) => record.email}
          tertiaryText={(record) => record.role}
        />
      ) : (
        <Datagrid rowClick="show" isRowSelectable={(record) => false}>
          <TextField label="Name" source="fullname" />
          <TextField label="ID" source="id" />
          <EmailField source="email" />
          <TextField source="role" />
        </Datagrid>
      )}
    </List>
  );
};

export default AdminList;
