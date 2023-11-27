import React, { useState } from 'react';

function DeleteButton() {
    const [idToDelete, setIdToDelete] = useState('');

    const handleInputChange = (e) => {
        setIdToDelete(e.target.value);
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/delete/${idToDelete}`, {
                method: 'DELETE',
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };

    return (
        <div>
            <h2>Delete Button</h2>
            <label>ID to delete:</label>
            <input type="text" value={idToDelete} onChange={handleInputChange} required />

            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default DeleteButton;
