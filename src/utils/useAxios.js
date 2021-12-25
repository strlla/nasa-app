import { useState, useEffect } from "react";

export const useAxios = (api, params) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await api(params);
      setResponse(response.data);
      setloading(false);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { response, error, loading };
};