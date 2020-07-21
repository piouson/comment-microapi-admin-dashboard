import routes from "./route-provider";

export default (type, resource, params) => {
  let route = routes(type, resource, params);
  const systemToken = localStorage.getItem("systemToken");
  route.options.headers = new Headers({ Accept: "application/json" });
  route.options.headers.set("Authorization", `Bearer ${systemToken}`);

  console.log("ROUTE", route);

  return fetch(route.url, route.options)
    .then((res) => res.json())
    .then(({ data }) => route.getData(data));
};
