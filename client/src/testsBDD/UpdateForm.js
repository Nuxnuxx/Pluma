import React, { useState } from 'react';

function UpdateForm() {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        description: '',
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:3001/api/update/${formData.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    description: formData.description,
                }),
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <div>
            <h2>Update Form</h2>
            <form onSubmit={handleFormSubmit}>
                <label>ID:</label>
                <input type="text" name="id" value={formData.id} onChange={handleInputChange} required />

                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />

                <label>Description:</label>
                <input type="text" name="description" value={formData.description} onChange={handleInputChange} required />

                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default UpdateForm;
