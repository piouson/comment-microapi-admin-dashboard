import { useState, useEffect } from "react";
import { useDataProvider } from "react-admin";

export default () => {
  const [adminCount, setAdminCount] = useState(0);
  const dataProvider = useDataProvider();

  useEffect(() => {
    dataProvider.getList("Admins").then(({ total }) => setAdminCount(total));
  }, [adminCount, dataProvider]);

  return [adminCount];
};
