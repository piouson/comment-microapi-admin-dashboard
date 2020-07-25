import { useState, useEffect } from "react";
import { useDataProvider } from "react-admin";

export default () => {
  const [applicationCount, setApplicationCount] = useState(0);
  const dataProvider = useDataProvider();

  useEffect(() => {
    const fetchAppList = async () => {
      const { total } = await dataProvider.getList("Applications");
      setApplicationCount(total);
    };
    fetchAppList();
  }, [applicationCount, dataProvider]);

  return [applicationCount];
};
