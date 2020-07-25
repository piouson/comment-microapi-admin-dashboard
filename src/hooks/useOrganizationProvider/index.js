import { useState, useEffect } from "react";
import { useDataProvider } from "react-admin";

export default () => {
  const [organizationCount, setOrganizationCount] = useState(0);
  const dataProvider = useDataProvider();

  useEffect(() => {
    const fetchOrgList = async () => {
      const { total } = await dataProvider.getList("Organizations");
      setOrganizationCount(total);
    };
    fetchOrgList();
  }, [organizationCount, dataProvider]);

  return [organizationCount];
};
