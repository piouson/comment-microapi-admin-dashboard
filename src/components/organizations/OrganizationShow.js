import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Show,
  TabbedShowLayout,
  Tab,
  TextField,
  ReferenceManyField,
  SimpleList,
  TopToolbar,
  DeleteButton,
} from "react-admin";

const useStyles = makeStyles({
  root: {
    color: "#3f51b5",
  },
});

const OrganizationShowActions = ({ basePath, data, resource }) => (
  <TopToolbar>
    <DeleteButton basePath={basePath} record={data} resource={resource} />
  </TopToolbar>
);

const OrganizationShow = (props) => {
  const classes = useStyles();

  return (
    <Show label="Show" actions={<OrganizationShowActions />} {...props}>
      <TabbedShowLayout>
        <Tab label="details">
          <TextField label="Name" source="organizationName" />
          <TextField label="Email" source="organizationEmail" />
        </Tab>
        <Tab label="applications">
          <ReferenceManyField
            link="show"
            label=""
            reference="Applications"
            target="organizationId"
          >
            <SimpleList
              className={classes.root}
              linkType="show"
              primaryText={(record) => record.applicationName}
            ></SimpleList>
          </ReferenceManyField>
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
};

export default OrganizationShow;
