import { useState, useEffect } from "react";
import { useDataProvider } from "react-admin";

export default () => {
  const [adminCount, setAdminCount] = useState(0);
  const dataProvider = useDataProvider();

  useEffect(() => {
    const fetchAdminList = async () => {
      const { total } = await dataProvider.getList("Admins");
      setAdminCount(total);
    };
    fetchAdminList();
  }, [adminCount, dataProvider]);

  return [adminCount];
};
