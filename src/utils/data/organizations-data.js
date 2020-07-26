const getOrganizationsData = (data, target, id) => {
  let mappedData = data;

  if (Array.isArray(data.records) && data.records[0].organizationId) {
    mappedData = data.records.map(mapOrganizationIdToId);
  }

  if (target && id) {
    mappedData = mappedData.filter((item) => item[target] === id);
  }

  return mappedData;
};

const mapOrganizationIdToId = (organization) => {
  return { id: organization.organizationId, ...organization };
};

export default getOrganizationsData;
