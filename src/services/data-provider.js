import { fetchUtils } from "react-admin";
import endpoints from "../utils/endpoints";
import { stringify } from "querystring";
import getPaginateQuery, { filter } from "../utils/pagination";
import handleProfileData from "../utils/data/profile-data";
import {
  GET_LIST,
  GET_ONE,
  GET_MANY,
  GET_MANY_REFERENCE,
  CREATE,
  UPDATE,
  DELETE,
  DELETE_MANY,
} from "react-admin";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const systemToken = localStorage.getItem("systemToken");
  options.headers.set("Authorization", `Bearer ${systemToken}`);
  return fetchUtils.fetchJson(url, options);
};

export default {
  getList: (resource, params) => {
    const query = getPaginateQuery(params);
    const endpoint = endpoints(GET_LIST, resource, params);
    return httpClient(`${endpoint.url}?${stringify(query)}`).then(
      ({ json }) => ({
        data: filter(endpoint.getData(json.data), params),
        total: json.data.pageInfo
          ? json.data.pageInfo.totalRecord
          : json.data.length,
      })
    );
  },

  getOne: (resource, params) => {
    if (resource === "profile") {
      return handleProfileData(GET_ONE, params);
    }
    const endpoint = endpoints(GET_ONE, resource, params);
    return httpClient(endpoint.url).then(({ json }) => ({
      data: endpoint.getData(json.data),
    }));
  },

  getMany: (resource, params) => {
    const endpoint = endpoints(GET_MANY, resource, params);
    return httpClient(endpoint.url).then(({ json }) => ({
      data: endpoint.getData(json.data),
    }));
  },

  getManyReference: (resource, params) => {
    const endpoint = endpoints(GET_MANY_REFERENCE, resource, params);
    console.log("REFERENCE", params);
    const query = {
      limit: 50,
      sort: "ASC",
      page: 1,
    };
    return httpClient(`${endpoint.url}?${stringify(query)}`).then(
      ({ json }) => ({
        data: endpoint.getData(json.data, endpoint.target, endpoint.targetId),
        total: json.data.pageInfo
          ? json.data.pageInfo.totalRecord
          : json.data.length,
      })
    );
  },

  update: (resource, params) => {
    const endpoint = endpoints(UPDATE, resource, params);
    return httpClient(endpoint.url, {
      method: "PATCH",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: endpoint.getData(json.data),
    }));
  },

  updateMany: () => Promise.reject(),

  create: (resource, params) => {
    const endpoint = endpoints(CREATE, resource, params);
    return httpClient(endpoint.url, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: endpoint.getData(json.data),
    }));
  },

  delete: (resource, params) => {
    const endpoint = endpoints(DELETE, resource, params);
    return httpClient(endpoint.url, {
      method: "DELETE",
    }).then(({ json }) => ({
      data: endpoint.getData(json.data),
    }));
  },

  deleteMany: (resource, params) => {
    const endpoint = endpoints(DELETE_MANY, resource, params);
    let result = [];
    return Promise.all(
      endpoint.urls.map((url) =>
        httpClient(url, {
          method: "DELETE",
        }).then(({ json }) => result.push(endpoint.getData(json.data)))
      )
    ).then(() => ({ data: result }));
  },
};
