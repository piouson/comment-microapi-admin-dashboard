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

export const filter = (data, params) => {
  const filter = params ? params.filter : {};
  if (Object.keys(filter).length) {
    return Object.keys(filter).reduce(
      (acc, key) =>
        acc.filter((item) => RegExp(filter[key], "i").test(item[key])),
      data
    );
  }
  return data;
};

export const sortData = (data, params) => {
  const sort = params.sort;
  if (sort) {
    return [].concat(data).sort((a, b) => {
      return isNaN(a[sort.field])
        ? a[sort.field].localeCompare(b[sort.field])
        : a - b;
    });
  }
  return data;
};
