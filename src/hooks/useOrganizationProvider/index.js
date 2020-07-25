import { useState, useEffect } from "react";
import { useDataProvider } from "react-admin";

export default () => {
  const [organizationCount, setOrganizationCount] = useState(0);
  const dataProvider = useDataProvider();

  useEffect(() => {
    dataProvider
      .getList("Organizations")
      .then(({ total }) => setOrganizationCount(total));
  }, [organizationCount, dataProvider]);

  return [organizationCount];
};
