import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { List, Datagrid, TextField, EmailField, SimpleList } from "react-admin";

const AdminList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <List label="Admins" title="Admins" {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.fullname}
          secondaryText={(record) => record.email}
          tertiaryText={(record) => record.role}
        />
      ) : (
        <Datagrid rowClick="show" isRowSelectable={(record) => false}>
          <TextField source="id" />
          <TextField source="fullname" />
          <EmailField source="email" />
          <TextField source="role" />
        </Datagrid>
      )}
    </List>
  );
};

export default AdminList;
