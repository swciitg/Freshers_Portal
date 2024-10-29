import { useState, useEffect } from "react";

function useFetchData(url, method, reqData) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const options = {
                    method,
                    headers: {
                        "Content-Type": "application/json",
                    },
                };

                if (method !== "GET") {
                    options.body = JSON.stringify(reqData);
                }

                const response = await fetch(url, options);

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, method, reqData]);

    return { data, loading, error };
}

export default useFetchData;