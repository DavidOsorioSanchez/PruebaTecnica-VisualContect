"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';


const useApiGetAll = ({ urlRequest = ""}: { urlRequest: string}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<unknown>(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                axios.get(urlRequest).then((response) => {
                    setData(response.data);
                });
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [urlRequest]);

    return { data, loading, error };
};

export default useApiGetAll;