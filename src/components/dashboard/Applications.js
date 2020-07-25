import React from "react";
import { Box, Card, Typography, Grid } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import { Link } from "react-router-dom";
import useApplicationProvider from "../../hooks/useApplicationProvider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    textDecoration: "none",
  },
});

const Applications = (props) => {
  const classes = useStyles();
  const [applicationCount] = useApplicationProvider();

  return (
    <Card variant="outlined">
      <Link to="/Applications" className={classes.root}>
        <Box display="flex" justifyContent="space-between" p={2}>
          <AppsIcon color="action"></AppsIcon>
          <Box textAlign="right">
            <Typography color="textPrimary">Applications</Typography>
            <Box mx={2}></Box>
            <Typography color="textSecondary" variant="h4">
              {applicationCount}
            </Typography>
          </Box>
        </Box>
      </Link>
    </Card>
  );
};

export default Applications;
