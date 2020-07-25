import { useState, useEffect } from "react";
import { useDataProvider } from "react-admin";

export default () => {
  const [applicationCount, setApplicationCount] = useState(0);
  const dataProvider = useDataProvider();

  useEffect(() => {
    dataProvider
      .getList("Applications")
      .then(({ total }) => setApplicationCount(total));
  }, [applicationCount, dataProvider]);

  return [applicationCount];
};
