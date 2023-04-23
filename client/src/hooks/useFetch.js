import { useContext, useEffect, useState } from "react";
import axiosInstance from "../axios";
import { AuthContext } from "../context/AuthContext";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loadig, setLoading] = useState([false]);
  const [error, setError] = useState([false]);
  const { user } = useContext(AuthContext);
  const token = user?.access_token;

  useEffect(() => {
    const config = {
      headers: {
        authorization: token,
      },
    };
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
  }, [url, token]);

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

  const count = data.map((data) => data.count);
  const type = data.map((data) => data.type);

  return { data, type, count, loadig, error, reFetch };
};

export default useFetch;
