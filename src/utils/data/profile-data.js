import { GET_ONE, UPDATE } from "react-admin";

const getUserProfile = (params) => {
  const profile = localStorage.getItem("profile");
  console.log("PROFILE", {
    id: JSON.parse(profile).msAdminId,
    ...JSON.parse(profile),
  });
  if (profile) {
    return Promise.resolve({
      data: { id: JSON.parse(profile).msAdminId, ...JSON.parse(profile) },
    });
  }
  return Promise.resolve({
    data: { id: params.id, fullname: "Dummy", email: "", role: "admin" },
  });
};

//const setUserProfile = (params) => {}

const handleProfileData = (type, params) => {
  switch (type) {
    case GET_ONE:
      return getUserProfile(params);
    case UPDATE:
      return Promise.reject();
    default:
      throw new Error(`Unsupported Profile Data Provider request type ${type}`);
  }
};

export default handleProfileData;
