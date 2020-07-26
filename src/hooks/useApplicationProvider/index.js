import { useState, useEffect } from "react";
import { useDataProvider } from "react-admin";

export default () => {
  const [applicationCount, setApplicationCount] = useState(0);
  const dataProvider = useDataProvider();

  useEffect(() => {
    dataProvider
      .getList("Applications")
      .then((data) => setApplicationCount(data ? data.total : 0));
  }, [applicationCount, dataProvider]);

  return [applicationCount];
};
