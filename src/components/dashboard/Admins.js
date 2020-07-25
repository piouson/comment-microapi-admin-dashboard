import React from "react";
import { Box, Card, Typography } from "@material-ui/core";
import AdminsIcon from "@material-ui/icons/Group";
import { Link } from "react-router-dom";
import useAdminProvider from "../../hooks/useAdminProvider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    textDecoration: "none",
  },
});

const Admins = (props) => {
  const classes = useStyles();
  const [adminsCount] = useAdminProvider();

  return (
    <Card variant="outlined">
      <Link to="/Admins" className={classes.root}>
        <Box display="flex" justifyContent="space-between" p={2}>
          <AdminsIcon color="action"></AdminsIcon>
          <Box textAlign="right">
            <Typography color="textPrimary">Admins</Typography>
            <Box mx={2}></Box>
            <Typography color="textSecondary" variant="h4">
              {adminsCount}
            </Typography>
          </Box>
        </Box>
      </Link>
    </Card>
  );
};

export default Admins;
