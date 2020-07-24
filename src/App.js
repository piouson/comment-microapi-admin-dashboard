import React from "react";
import { Admin, Resource } from "react-admin";
import Dashboard from "./components/dashboard/Dashboard";
import services from "./services";
import msadmins from "./components/msadmins";
import applications from "./components/applications";
import settings from "./components/settings";

function App() {
  return (
    <Admin dashboard={Dashboard} {...services}>
      <Resource name="Admins" {...msadmins} />
      <Resource name="Applications" {...applications} />
      <Resource name="Settings" {...settings} />
    </Admin>
  );
}

export default App;
