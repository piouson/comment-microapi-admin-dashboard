import React from "react";
import { Box, Card, Typography } from "@material-ui/core";
import OrganizationIcon from "@material-ui/icons/Business";
import { Link } from "react-router-dom";
import useOrganizationProvider from "../../hooks/useOrganizationProvider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    textDecoration: "none",
  },
});

const Organizations = (props) => {
  const classes = useStyles();
  const [organizationCount] = useOrganizationProvider();

  return (
    <Card variant="outlined">
      <Link to="/Organizations" className={classes.root}>
        <Box display="flex" justifyContent="space-between" p={2}>
          <OrganizationIcon color="action"></OrganizationIcon>
          <Box textAlign="right">
            <Typography color="textPrimary">Organizations</Typography>
            <Box mx={2}></Box>
            <Typography color="textSecondary" variant="h4">
              {organizationCount}
            </Typography>
          </Box>
        </Box>
      </Link>
    </Card>
  );
};

export default Organizations;
