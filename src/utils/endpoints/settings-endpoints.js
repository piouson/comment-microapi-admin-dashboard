import { GET_ONE, UPDATE } from "react-admin";
const apiUrl = "https://comments-microservice.herokuapp.com/v1";

export default (type, params) => {
  switch (type) {
    case GET_ONE:
      return {
        url: `${apiUrl}/msadmins/settings`,
        getData: (data) => data,
      };
    case UPDATE:
      return {
        url: `${apiUrl}/msadmins/settings`,
        options: {
          method: "PATCH",
          body: JSON.stringify(params.data),
        },
        getData: (data) => data,
      };
    default:
      throw new Error(`Unsupported Admin Data Provider request type ${type}`);
  }
};
