import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { List, Datagrid, TextField, EmailField, SimpleList } from "react-admin";

const AdminList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <List label="Admins" {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.title}
          secondaryText={(record) => `${record.views} views`}
          tertiaryText={(record) =>
            new Date(record.published_at).toLocaleDateString()
          }
        />
      ) : (
        <Datagrid rowClick="show">
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
