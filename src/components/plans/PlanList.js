import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { List, Datagrid, TextField, SimpleList } from "react-admin";
import Pagination from "../pagination";
import PlanFilter from "./PlanFilter";

const PlanList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <List
      label="Plans"
      title="Plans"
      pagination={<Pagination />}
      filters={<PlanFilter />}
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
