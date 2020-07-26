import { useState, useEffect } from "react";
import { useDataProvider } from "react-admin";

export default () => {
  const [organizationCount, setOrganizationCount] = useState(0);
  const dataProvider = useDataProvider();

  useEffect(() => {
    dataProvider
      .getList("Organizations")
      .then((data) => setOrganizationCount(data ? data.total : 0));
  }, [organizationCount, dataProvider]);

  return [organizationCount];
};
