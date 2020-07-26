import { useState, useEffect } from "react";
import { useDataProvider } from "react-admin";

export default () => {
  const [adminCount, setAdminCount] = useState(0);
  const dataProvider = useDataProvider();

  useEffect(() => {
    dataProvider
      .getList("Admins")
      .then((data) => setAdminCount(data ? data.total : 0));
  }, [adminCount, dataProvider]);

  return [adminCount];
};
