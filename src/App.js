import React from "react";
import { Admin, Resource } from "react-admin";
import Dashboard from "./components/dashboard/Dashboard";
import services from "./services";
import msadmins from "./components/msadmins";
import organizations from "./components/organizations";
import applications from "./components/applications";
import settings from "./components/settings";
import theme from "./theme";

function App() {
  return (
    <Admin theme={theme} dashboard={Dashboard} {...services}>
      <Resource name="Admins" {...msadmins} />
      <Resource name="Organizations" {...organizations} />
      <Resource name="Applications" {...applications} />
      <Resource name="Settings" {...settings} />
    </Admin>
  );
}

export default App;
