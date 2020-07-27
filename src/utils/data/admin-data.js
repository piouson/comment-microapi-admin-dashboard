export default (data) => {
  if (data.records && Array.isArray(data.records)) {
    const profile = localStorage.getItem("profile");
    const currentUserId = JSON.parse(profile).msAdminId;
    return data.records
      .filter((admin) => admin.msAdminId !== currentUserId)
      .map((item) => ({ id: item.msAdminId, ...item }));
  } else if (data.msAdminId) {
    return { id: data.msAdminId, ...data };
  }
  return data;
};
