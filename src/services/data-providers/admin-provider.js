import httpClient from "../http-client";
import convertData from "../../utils/data/admin-data";

const apiUrl = "https://comments-microservice.herokuapp.com/v1";
export default {
  getList: (resource, params) =>
    httpClient(`${apiUrl}/msadmins`).then(({ json }) => ({
      data: convertData(resource, json.data),
      total: json.data.length,
    })),

  getOne: (resource, params) =>
    httpClient(`${apiUrl}/msadmins/${params.id}`).then(({ json }) => ({
      data: convertData(resource, json.data),
    })),

  update: (resource, params) => {
    const token = localStorage.getItem("systemToken");
    console.log(params);
    if (token === params.id || token === params.msAdminId) {
      return httpClient(`${apiUrl}/msadmins`, {
        method: "PATCH",
        body: JSON.stringify(params.data),
      }).then(({ json }) => ({
        data: convertData(resource, json.data),
      }));
    }
    return Promise.reject();
  },

  create: (resource, params) =>
    httpClient(`${apiUrl}/msadmins/create`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: convertData(resource, json.data),
    })),

  delete: (resource, params) =>
    httpClient(`${apiUrl}/msadmins/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => ({
      data: convertData(resource, json.data),
    })),
};
