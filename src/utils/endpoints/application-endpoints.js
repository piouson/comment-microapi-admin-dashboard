import getData from "../../utils/data/application-data";
import { GET_ONE, GET_LIST } from "react-admin";

const apiUrl = "https://comments-microservice.herokuapp.com/v1";

export default (type, params) => {
  switch (type) {
    case GET_LIST:
      return {
        url: `${apiUrl}/msadmins/applications`,
        getData: getData,
      };
    case GET_ONE:
      return {
        url: `${apiUrl}/msadmins/applications/${params.id}`,
        getData: getData,
      };
    default:
      throw new Error(
        `Unsupported Application Data Provider request type ${type}`
      );
  }
};
