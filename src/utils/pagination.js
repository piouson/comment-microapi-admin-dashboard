export default (params) => {
  const { page, perPage } =
    params && params.pagination ? params.pagination : { page: 1, perPage: 10 };
  const { order } = params && params.sort ? params.sort : { order: "DESC" };
  return {
    limit: perPage,
    sort: order,
    page: page,
  };
};
