import React from "react";
import { Card, CardHeader } from "@material-ui/core";
import Admins from "./Admins";
import Applications from "./Applications";
import Organizations from "./Organizations";

const Dashboard = () => (
  <Card>
    <CardHeader title="Welcome to Admin Dashboard" />
    <Admins />
    <Applications />
    <Organizations />
  </Card>
);

export default Dashboard;
