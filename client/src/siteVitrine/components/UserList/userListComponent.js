import React, { useState, useEffect } from 'react';
import axios from "axios"

export function UserList(){
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/users');
                setUsers(response.data.users);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/api/users', {
                id: Date.now(), // Simplement un timestamp comme ID
                name,
                email
            });

            setUsers([...users, response.data.user]);
            setName('');
            setEmail('');
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <div>
            <h1>Liste des utilisateurs :</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>

            <h2>Ajouter un utilisateur :</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}