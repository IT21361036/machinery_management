import {useEffect, useState} from "react"
import axiosInstance from "../axios";


const useFetch = (url) =>{
    const [data, setData] = useState([]);
    const [loadig, setLoading] = useState([false]);
    const [error, setError] = useState([false]);

    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true);
            try {
                const res = await axiosInstance.get(url);
                setData(res.data);
            } catch (err) {
                setError(err);
            }
            setLoading(false)
        };
        fetchData();
    },[url]);

    const reFetch = async ()=>{
        setLoading(true);
        try {
            const res = await axiosInstance.get(url);
            setData(res.data);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    };


    const count = data.map(data => data.count);
    const type = data.map(data => data.type);

    return {data, type,count,loadig, error, reFetch};
};


export default useFetch;

