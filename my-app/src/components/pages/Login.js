import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Dummy credentials
        const hardcodedCred = {
            username: 'admin',
            password: 'password123'
        };

        // Check if entered credentials match the hardcoded ones
        if (username === hardcodedCred.username && password === hardcodedCred.password) {
            console.log('Logged in');
            navigate('/home'); // Navigate to the Home component
        } else {
            alert('Incorrect Username or Password!');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
