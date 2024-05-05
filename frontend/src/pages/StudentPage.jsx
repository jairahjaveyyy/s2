
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/header';
import StudentList from '../components/StudentList';

function StudentPage() {
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
                   <StudentList/>
                </div>
            </div>
        </div>
    );
}

export default StudentPage;
