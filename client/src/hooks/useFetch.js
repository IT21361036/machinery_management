import { useEffect, useState } from "react";
import axiosInstance from "../axios";
import { useGetTokenConfig } from "./useGetToenConfig";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [error, setError] = useState([false]);
  const config = useGetTokenConfig();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get(url, config);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url, config]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  const count = data?.map?.((data) => data.count);
  const type = data?.map?.((data) => data.type);

  return { data, type, count, loading, error, reFetch };
};

export default useFetch;
