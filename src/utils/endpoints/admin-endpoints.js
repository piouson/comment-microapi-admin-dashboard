import getData from "../../utils/data/admin-data";
import {
  GET_LIST,
  GET_ONE,
  CREATE,
  UPDATE,
  DELETE,
  GET_MANY,
  GET_MANY_REFERENCE,
} from "react-admin";

const apiUrl = "https://comments-microservice.herokuapp.com/v1";

export default (type, params) => {
  switch (type) {
    case GET_LIST:
      return {
        url: `${apiUrl}/msadmins`,
        getData: getData,
      };
    case GET_ONE:
      return {
        url: `${apiUrl}/msadmins/${params.id}`,
        getData: getData,
      };
    case GET_MANY:
      return {
        url: `${apiUrl}/msadmins`,
        getData: getData,
      };
    case GET_MANY_REFERENCE:
      return {
        url: `${apiUrl}/msadmins`,
        getData: getData,
      };
    case UPDATE:
      return {
        url: `${apiUrl}/msadmins`,
        options: {
          method: "PATCH",
          body: JSON.stringify(params.data),
        },
        getData: getData,
      };
    case CREATE:
      return {
        url: `${apiUrl}/msadmins/create`,
        options: {
          method: "POST",
          body: JSON.stringify(params.data),
        },
        getData: getData,
      };
    case DELETE:
      return {
        url: `${apiUrl}/msadmins/${params.id}`,
        options: { method: "DELETE" },
        getData: getData,
      };
    default:
      throw new Error(`Unsupported Admin Data Provider request type ${type}`);
  }
};
