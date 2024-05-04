// SignupFormContent.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function SignupFormContent({ formData, handleChange, handleSubmit }) {
    return (
        <div className="bg-green-100 flex items-center justify-center h-screen">
            <div className="max-w-xl bg-beige-100 shadow-md rounded-lg overflow-hidden md:flex">
                <div className="hidden md:block md:w-1/2 bg-white text-center py-10">
                    <img src="https://scontent.fdvo1-1.fna.fbcdn.net/v/t39.30808-6/361285049_756300016505576_1065119465114803334_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zPPlKZuqI7gQ7kNvgFb11Bh&_nc_ht=scontent.fdvo1-1.fna&oh=00_AfDmQqa6BuSuE9Qx2uV0KqZy1QSGuivJERQUbSSqnBAjBQ&oe=6638FA80" alt="School Logo" className="mx-auto h-full w-full" />
                </div>
                <div className="md:w-1/2 px-6 py-8 lg:w-3/6 bg-green-200">
                    <h2 className="text-center text-2xl font-bold mb-6 ">Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-input w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="form-input w-full" />
                        </div>
                        <div className="mb-4">
                            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Signup</button>
                        </div>
                        <div className="text-center">
                            {/* Link to the login page */}
                            <p>Already have an account? <Link to="/login" className="text-blue-600 underline">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignupFormContent;
