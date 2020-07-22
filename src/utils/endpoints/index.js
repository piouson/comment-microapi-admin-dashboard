import adminEndpoints from "./admin-endpoints";
import settingsEndpoints from "./settings-endpoints";

export default (type, resource, params) => {
  switch (resource) {
    case "Admins":
      return adminEndpoints(type, params);
    case "Settings":
      return settingsEndpoints(type, params);
    default:
      return "";
  }
};
