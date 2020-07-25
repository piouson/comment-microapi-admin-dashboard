const getPlansData = (data, target, id) => {
  let mappedData = data;

  if (Array.isArray(data) && data[0].planId) {
    mappedData = data.map(mapPlanIdToId);
  } else if (data.planId) {
    mappedData = mapPlanIdToId(data);
  }

  if (target && id) {
    mappedData = mappedData.filter((item) => item[target] === id);
  }

  return mappedData;
};

const mapPlanIdToId = (plan) => {
  return { id: plan.planId, ...plan };
};

export default getPlansData;
