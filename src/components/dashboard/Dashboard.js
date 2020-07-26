import React from "react";
import { Card, CardHeader, Grid, Box } from "@material-ui/core";
import Admins from "./Admins";
import Applications from "./Applications";
import Organizations from "./Organizations";

const Dashboard = () => (
  <Card>
    <CardHeader title="Welcome to Admin Dashboard" />
    <Box p={2}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Admins />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Applications />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Organizations />
        </Grid>
      </Grid>
    </Box>
  </Card>
);

export default Dashboard;
