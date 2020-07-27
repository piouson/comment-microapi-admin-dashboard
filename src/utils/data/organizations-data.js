const getOrganizationsData = (data) => {
  let mappedData = data;

  if (Array.isArray(data.records) && data.records[0].organizationId) {
    mappedData = data.records.map(mapOrganizationIdToId);
  }

  return mappedData;
};

const mapOrganizationIdToId = (organization) => {
  return { id: organization.organizationId, ...organization };
};

export default getOrganizationsData;
