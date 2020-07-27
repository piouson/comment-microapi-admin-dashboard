import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { List, Datagrid, TextField, EmailField, SimpleList } from "react-admin";
import Pagination from "../pagination/Pagination";
import Filter from "../pagination/Filter";

const AdminList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const filters = [
    {
      label: "Filter by name",
      source: "fullname",
      alwaysOn: true,
    },
    {
      label: "Filter by email",
      source: "email",
    },
    {
      label: "Filter by role",
      source: "role",
    },
  ];

  return (
    <List
      label="Admins"
      title="Admins"
      pagination={<Pagination />}
      filters={<Filter filters={filters} />}
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
