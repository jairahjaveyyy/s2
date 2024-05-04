import React, { useState } from 'react';
import axios from 'axios';
import LoginFormContent from '../components/LoginFormContent';

function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/user/login', formData); // Corrected endpoint
            if (response.status === 200) {
                alert('User logged in successfully');
                // Redirect to dashboard or perform other actions upon successful login
            } else {
                alert('Failed to log in');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('Failed to log in');
        }
    };

    return (
        <LoginFormContent
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    );
}

export default LoginForm;
