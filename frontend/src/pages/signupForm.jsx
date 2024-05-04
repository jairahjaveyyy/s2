import React, { useState } from 'react';
import axios from 'axios';
import SignupFormContent from '../components/SingupFormContent';

function SignupForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/user/register', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true, // Include credentials in the request (cookies)
            });
            if (response.data.success) {
                alert('User signed up successfully');
                setFormData({ name: '', email: '', password: '' });
            } else {
                alert('Failed to sign up');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            alert('Failed to sign up. Please try again later.');
        }
    };

    return (
        <SignupFormContent
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    );
}

export default SignupForm;
