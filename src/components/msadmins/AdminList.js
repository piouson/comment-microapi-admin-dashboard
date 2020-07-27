import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { List, Datagrid, TextField, EmailField, SimpleList } from "react-admin";
import Pagination from "../pagination";
import AdminFilter from "./AdminFilter";

const AdminList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <List
      label="Admins"
      title="Admins"
      pagination={<Pagination />}
      filters={<AdminFilter />}
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
        <Datagrid rowClick="show">
          <TextField label="Name" source="fullname" />
          <EmailField source="email" />
          <TextField source="role" />
        </Datagrid>
      )}
    </List>
  );
};

export default AdminList;
