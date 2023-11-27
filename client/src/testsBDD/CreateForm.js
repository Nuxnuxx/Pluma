import React, { useState } from 'react';

function CreateForm() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/api/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error creating data:', error);
        }
    };

    return (
        <div>
            <h2>Create Form</h2>
            <form onSubmit={handleFormSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />

                <label>Description:</label>
                <input type="text" name="description" value={formData.description} onChange={handleInputChange} required />

                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreateForm;
