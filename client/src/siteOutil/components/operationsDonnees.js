import { useState, useEffect } from 'react';

const useFetchData = (url, isSingleRecord = false) => {
    const [data, setData] = useState(isSingleRecord ? null : []);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();

                setData(isSingleRecord ? result.data[0] : result.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, isSingleRecord]);

    return { data, loading, error };
};

export default useFetchData;
