import adminRoute from "../../utils/endpoints/admin-endpoints";

export default (type, resource, params) => {
  switch (resource) {
    case "Admins":
      return adminRoute(type, params);
    default:
      throw new Error(`Unsupported Data Provider resource ${resource}`);
  }
};
