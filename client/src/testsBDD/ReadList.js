import React, { useState, useEffect } from 'react';

function ReadList() {
    const [data, setData] = useState([]);
    const [selectedTable, setSelectedTable] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setSelectedTable("projet");
            try {
                if (selectedTable) {
                    const response = await fetch(`http://localhost:3001/api/read/${selectedTable}`);
                    const result = await response.json();
                    setData(result.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [selectedTable]);

    return (
        <div>
            <h2>Read List</h2>
            <label>Select Table:</label>
            <ul>
                {data.map((item) => (
                    <li key={item.titre}>
                        <p>Titre : {item.titre}</p>
                         <p>Description : {item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ReadList;
