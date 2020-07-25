import adminEndpoints from "./admin-endpoints";
import settingsEndpoints from "./settings-endpoints";
import organizationsEndpoints from "./organizations-endpoints";
import applicationEndpoints from "./application-endpoints";
import plansEndpoints from "./plans-endpoints";

export default (type, resource, params) => {
  switch (resource) {
    case "Admins":
      return adminEndpoints(type, params);
    case "Settings":
      return settingsEndpoints(type, params);
    case "Organizations":
      return organizationsEndpoints(type, params);
    case "Applications":
      return applicationEndpoints(type, params);
    case "Plans":
      return plansEndpoints(type, params);
    default:
      return "";
  }
};
