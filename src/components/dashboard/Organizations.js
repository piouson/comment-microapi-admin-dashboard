import React from "react";
import { Box, Card, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useOrganizationProvider from "../../hooks/useOrganizationProvider";

const Organizations = (props) => {
  const [organizationCount] = useOrganizationProvider();
  return (
    <Card>
      <Link to="/Organizations">
        <Box textAlign="right">
          <Typography color="textSecondary">Organizations</Typography>
          <Typography variant="h5" component="h2">
            {organizationCount}
          </Typography>
        </Box>
      </Link>
    </Card>
  );
};

export default Organizations;
