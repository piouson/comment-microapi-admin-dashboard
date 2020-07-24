const convertData = (data) => {
  if (data.organizationId) {
    return {
      id: data.applicationId,
      orgId: data.organizationId._id,
      ...data,
    };
  }
  return {
    id: data.applicationId,
    ...data,
  };
};

export default (data) => {
  if (data.records && Array.isArray(data.records)) {
    return data.records.map((item) => convertData(item));
  } else if (data.applicationId) {
    return convertData(data);
  }
  return data;
};
