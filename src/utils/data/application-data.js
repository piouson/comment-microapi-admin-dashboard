const getApplicationsData = (data, target, id) => {
  let mappedData = data;

  if (Array.isArray(data.records) && data.records[0].applicationId) {
    mappedData = data.records.map(mapApplicationIdToId);

    if (target && id) {
      mappedData = mappedData.filter((item) => {
        return item[target]._id === id;
      });
    }
  }

  return mappedData;
};

const mapApplicationIdToId = (application) => {
  if (application.organizationId) {
    return {
      id: application.applicationId,
      orgId: application.organizationId._id,
      ...application,
    };
  }
  return {
    id: application.applicationId,
    ...application,
  };
};

export default getApplicationsData;
