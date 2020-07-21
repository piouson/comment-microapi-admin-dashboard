import React from "react";
import { Admin, Resource } from "react-admin";
import Dashboard from "./components/dashboard/Dashboard";
import services from "./services";
import msadmins from "./components/msadmins";
import settings from "./components/settings";
//import dataprovider from "./services/data-providers";

function App() {
  return (
    <Admin dashboard={Dashboard} {...services}>
      <Resource name="Admins" {...msadmins} />
      <Resource name="Settings" {...settings} />
    </Admin>
  );
}

export default App;
