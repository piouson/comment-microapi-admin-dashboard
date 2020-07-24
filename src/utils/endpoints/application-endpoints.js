import getData from "../../utils/data/application-data";
import {
  GET_ONE,
  GET_LIST,
  GET_MANY,
  GET_MANY_REFERENCE,
  DELETE,
  DELETE_MANY,
} from "react-admin";

const apiUrl = "https://comments-microservice.herokuapp.com/v1";

export default (type, params) => {
  switch (type) {
    case GET_MANY:
    case GET_MANY_REFERENCE:
    case GET_LIST:
      return {
        url: `${apiUrl}/msadmins/applications`,
        getData: getData,
      };
    case GET_ONE:
    case DELETE:
      return {
        url: `${apiUrl}/msadmins/applications/${params.id}`,
        getData: getData,
      };
    case DELETE_MANY:
      return {
        urls: params.ids.map((id) => `${apiUrl}/msadmins/applications/${id}`),
        getData: getData,
      };
    default:
      throw new Error(
        `Unsupported Application Data Provider request type ${type}`
      );
  }
};
