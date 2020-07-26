import { GET_ONE, UPDATE } from "react-admin";

const getUserProfile = (params) => {
  const profile = localStorage.getItem("profile");
  if (profile) {
    return Promise.resolve({
      data: { id: params.id, ...JSON.parse(profile) },
    });
  }
  return Promise.resolve({
    data: { id: params.id, fullname: "Dummy", email: "", role: "admin" },
  });
};

const setUserProfile = (params) => {
  console.log("SET_PROFILE", params);
  return Promise.reject();
};

const handleProfileData = (type, params) => {
  switch (type) {
    case GET_ONE:
      return getUserProfile(params);
    case UPDATE:
      return setUserProfile(params);
    default:
      throw new Error(`Unsupported Profile Data Provider request type ${type}`);
  }
};

export default handleProfileData;
