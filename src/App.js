import React from "react";
import { Admin, Resource } from "react-admin";
import { Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import services from "./services";
import msadmins from "./components/msadmins";
import organizations from "./components/organizations";
import applications from "./components/applications";
import plans from "./components/plans";
import settings from "./components/settings";
import profile from "./components/profile";

function App() {
  return (
    <Admin
      dashboard={Dashboard}
      customRoutes={[
        <Route key="profile" path="/profile" component={profile.edit} />,
      ]}
      {...services}
    >
      <Resource name="Admins" {...msadmins} />
      <Resource name="Organizations" {...organizations} />
      <Resource name="Applications" {...applications} />
      <Resource name="Plans" {...plans} />
      <Resource name="Settings" {...settings} />
      <Resource name="profile" />
    </Admin>
  );
}

export default App;
