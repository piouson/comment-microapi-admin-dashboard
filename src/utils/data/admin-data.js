export default (data) => {
  if (data.records && Array.isArray(data.records)) {
    return data.records.map((item) => ({ id: item.msAdminId, ...item }));
  } else if (data.msAdminId) {
    return { id: data.msAdminId, ...data };
  }
  return data;
};
