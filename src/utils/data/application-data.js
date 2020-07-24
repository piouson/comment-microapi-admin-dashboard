const convertData = (data) => ({
  id: data.applicationId,
  orgId: data.organizationId._id,
  ...data,
});

export default (data) => {
  if (data.length && data[0].applicationId && data.constructor === Array) {
    return data.map((item) => convertData(item));
  } else if (data.applicationId && data === Object(data)) {
    return convertData(data);
  }
  return data;
};
