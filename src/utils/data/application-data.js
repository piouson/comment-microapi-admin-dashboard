const getApplicationsData = (data) => {
  let mappedData = data;

  if (Array.isArray(data.records) && data.records[0].applicationId) {
    mappedData = data.records.map(mapApplicationIdToId);
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
