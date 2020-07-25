import getData from "../../utils/data/plans-data";
import {
  GET_ONE,
  GET_LIST,
  GET_MANY,
  GET_MANY_REFERENCE,
  CREATE,
  DELETE,
  DELETE_MANY,
} from "react-admin";

const apiUrl = "https://comments-microservice.herokuapp.com/v1";

export default (type, params) => {
  switch (type) {
    case GET_MANY:
    case GET_LIST:
      return {
        url: `${apiUrl}/msadmins/plans`,
        getData: getData,
      };
    case GET_MANY_REFERENCE:
      return {
        url: `${apiUrl}/msadmins/plans`,
        getData: (data) => {
          return getData(data, params.target, params.id);
        },
      };
    case CREATE:
      return {
        url: `${apiUrl}/msadmins/plans`,
        options: {
          body: JSON.stringify(params.data),
        },
        getData: getData,
      };
    case GET_ONE:
    case DELETE:
      return {
        url: `${apiUrl}/msadmins/plans/${params.id}`,
        getData: getData,
      };
    case DELETE_MANY:
      return {
        urls: params.ids.map((id) => `${apiUrl}/msadmins/plans/${id}`),
        getData: getData,
      };
    default:
      throw new Error(
        `Unsupported Application Data Provider request type ${type}`
      );
  }
};
