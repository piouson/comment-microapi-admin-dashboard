const convertAPIData = (data) => {
  if (data.length && data.constructor === Array) {
    return data.map(({ msAdminId, ...rest }) => ({ id: msAdminId, ...rest }));
  } else if (data.msAdminId && data === Object(data)) {
    return ({ msAdminId, ...data }) => ({ id: msAdminId, ...data });
  }
  return data;
};
/*
import getAdminData from "./data/admin-data";

const dataMap = (resource, data) => {
  console.log()
  switch (resource) {
    case "Admins":
      return getAdminData(data);
    default:
      return () => null;
  }
}

export default dataMap; */
export default convertAPIData;
