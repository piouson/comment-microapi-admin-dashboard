import { fetchUtils } from "react-admin";
import endpoints from "../utils/endpoints";
import { stringify } from "querystring";
import getPaginateQuery from "../utils/pagination";
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
        data: endpoint.getData(json.data.records),
        total: json.data.pageInfo.totalRecord,
      })
    );
  },

  getOne: (resource, params) => {
    const endpoint = endpoints(GET_ONE, resource, params);
    return httpClient(endpoint.url).then(({ json }) => ({
      data: endpoint.getData(json.data),
    }));
  },

  getMany: (resource, params) => {
    const endpoint = endpoints(GET_MANY, resource, params);
    return httpClient(endpoint.url).then(({ json }) => ({
      data: endpoint.getData(json.data.records),
    }));
  },

  getManyReference: (resource, params) => {
    const query = getPaginateQuery(params);
    const endpoint = endpoints(GET_MANY_REFERENCE, resource, params);
    return httpClient(`${endpoint.url}?${stringify(query)}`).then(
      ({ json }) => ({
        data: endpoint.getData(json.data.records),
        total: json.data.pageInfo.totalRecord,
      })
    );
  },

  update: (resource, params) => {
    const token = localStorage.getItem("systemToken");
    const endpoint = endpoints(UPDATE, resource, params);
    if (token === params.id || token === params.msAdminId) {
      return httpClient(endpoint.url, endpoint.options).then(({ json }) => ({
        data: endpoint.getData(json.data),
      }));
    }
    return Promise.reject();
  },

  updateMany: (resource, params) => Promise.reject(),

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
    httpClient(endpoint.url, {
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
