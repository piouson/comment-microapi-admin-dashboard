export default (data) => {
  if (data.length && data.msAdminId && data.constructor === Array) {
    return data.map((item) => ({ id: item.msAdminId, ...item }));
  } else if (data.msAdminId && data === Object(data)) {
    return { id: data.msAdminId, ...data };
  }
  return data;
};
