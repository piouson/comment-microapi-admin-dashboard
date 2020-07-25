import React from "react";
import { Box, Card, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useAdminProvider from "../../hooks/useAdminProvider";

const Admins = (props) => {
  const [adminCount] = useAdminProvider();
  return (
    <Card>
      <Link to="/Admins">
        <Box textAlign="right">
          <Typography color="textSecondary">Admins</Typography>
          <Typography variant="h5" component="h2">
            {adminCount}
          </Typography>
        </Box>
      </Link>
    </Card>
  );
};

export default Admins;
