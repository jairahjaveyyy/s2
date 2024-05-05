import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    // State to control sidebar visibility
    const [showSidebar, setShowSidebar] = useState(false);

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div>
            {/* Menu icon */}
            <div className="bg-gray-800 text-white p-4 cursor-pointer" onClick={toggleSidebar}>
                {showSidebar ? (
                    <>
                        <h2 className="text-2xl font-bold mb-4"><i className="fa-solid fa-bars text-2xl mb-4 mr-4"></i>AcademixPro</h2>
                        
                    </>
                ) : (
                    <h2 className="text-2xl font-bold mb-4 h-12"><i className="fa-solid fa-bars"></i></h2>
                )}
            </div>

            {/* Sidebar content */}
            {showSidebar && (
                <div className="bg-gray-800 text-white p-4 w-[250px] h-screen ">
                    <ul>
                        <li className="mb-2 border-b  border-gray-700 p-2">
                            <Link to="/dashboard" className="text-white hover:text-green-700"><i className="fa-solid fa-house mr-2"></i>Dashboard</Link>
                        </li>
                        <li className="mb-2 border-b border-gray-700 p-2">
                            <Link to="/studentpage" className="text-white hover:text-green-700"><i className="fa-solid fa-user mr-2"></i>Students</Link>
                        </li>
                        <li className="mb-2 border-b border-gray-700 p-2">
                            <Link to="/course" className="text-white hover:text-green-700"><i className="fa-solid fa-bookmark mr-2"></i>Course</Link>
                        </li>
                        <li className="mb-2 border-b border-gray-700 p-2">
                            <Link to="/subjects" className="text-white hover:text-green-700"><i className="fa-solid fa-book mr-2"></i>Subjects</Link>
                        </li>
                        <li className="mb-2 border-b border-gray-700 p-2">
                            <Link to="/logout" className="text-white hover:text-green-700 "><i className="fa-solid fa-right-from-bracket mr-2"></i>Logout</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Sidebar;
