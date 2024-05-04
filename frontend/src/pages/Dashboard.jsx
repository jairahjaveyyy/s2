
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/header';
import StudentStatistics from '../components/StudentsStatistics';

function Dashboard() {
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />
            
            {/* Main content */}
            <div className="flex-grow">
                {/* Header */}
                <Header />
                
                {/* Main content area */}
                <div className="p-4">
                    <StudentStatistics />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
