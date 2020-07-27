import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { List, Datagrid, TextField, SimpleList } from "react-admin";
import Pagination from "../pagination/Pagination";
import Filter from "../pagination/Filter";

const PlanList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const filters = [
    {
      label: "Filter by name",
      source: "organizationName",
      alwaysOn: true,
    },
    {
      label: "Filter by email",
      source: "organizationEmail",
    },
  ];

  return (
    <List
      label="Plans"
      title="Plans"
      pagination={<Pagination />}
      filters={<Filter filters={filters} />}
      {...props}
    >
      {isSmall ? (
        <SimpleList linkType="show" primaryText={(record) => record.planName} />
      ) : (
        <Datagrid rowClick="show">
          <TextField label="Name" source="planName" />
        </Datagrid>
      )}
    </List>
  );
};

export default PlanList;
