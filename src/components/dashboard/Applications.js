import React from "react";
import { Box, Card, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useApplicationProvider from "../../hooks/useApplicationProvider";

const Applications = (props) => {
  const [applicationCount] = useApplicationProvider();
  return (
    <Card>
      <Link to="/Applications">
        <Box textAlign="right">
          <Typography color="textSecondary">Applications</Typography>
          <Typography variant="h5" component="h2">
            {applicationCount}
          </Typography>
        </Box>
      </Link>
    </Card>
  );
};

export default Applications;
