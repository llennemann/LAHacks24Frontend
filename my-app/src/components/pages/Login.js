import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const hardcodedCred = {
            username: ['shrishti', 'utkarsh', 'lucy', 'jatin'],
            password: 'password123'
        };

        if (hardcodedCred.username.includes(username) && password === hardcodedCred.password) {
            console.log('Logged in');
            navigate('/home');
        } else {
            alert('Incorrect Username or Password!');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Login to your RoamBuddy</h2>
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
                <button className="button-spec" type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;

