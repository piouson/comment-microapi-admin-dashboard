import getData from "../../utils/data/organizations-data";
import {
  GET_ONE,
  GET_LIST,
  GET_MANY,
  GET_MANY_REFERENCE,
  DELETE,
} from "react-admin";

const apiUrl = "https://comments-microservice.herokuapp.com/v1";

export default (type, params) => {
  switch (type) {
    case GET_MANY:
    case GET_LIST:
      return {
        url: `${apiUrl}/msadmins/organizations`,
        getData: getData,
      };
    case GET_MANY_REFERENCE:
      return {
        url: `${apiUrl}/msadmins/organizations/${params.id}/applications`,
        getData: getData,
      };
    case GET_ONE:
    case DELETE:
      return {
        url: `${apiUrl}/msadmins/organizations/${params.id}`,
        getData: getData,
      };
    default:
      throw new Error(
        `Unsupported Application Data Provider request type ${type}`
      );
  }
};
