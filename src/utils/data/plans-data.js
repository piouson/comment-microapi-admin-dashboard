const getPlansData = (data) => {
  let mappedData = data;

  if (Array.isArray(data) && data[0].planId) {
    mappedData = data.map(mapPlanIdToId);
  } else if (data.planId) {
    mappedData = mapPlanIdToId(data);
  }

  return mappedData;
};

const mapPlanIdToId = (plan) => {
  return { id: plan.planId, ...plan };
};

export default getPlansData;
