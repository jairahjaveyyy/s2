import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function StudentList() {
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [statusFilter, setStatusFilter] = useState('');
    const [blockFilter, setBlockFilter] = useState('');
    const [yearLevelFilter, setYearLevelFilter] = useState('');

    useEffect(() => {
        fetchStudents();
    }, []);

    useEffect(() => {
        applyFilters(statusFilter, blockFilter, yearLevelFilter);
    }, [statusFilter, blockFilter, yearLevelFilter, students]);

    const fetchStudents = async () => {
        try {
            const response = await axios.get('/students/getAll');
            setStudents(response.data.data); // Assuming response.data contains the student data
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    const handleStatusChange = (e) => {
        setStatusFilter(e.target.value);
    };

    const handleBlockChange = (e) => {
        setBlockFilter(e.target.value);
    };

    const handleYearLevelChange = (e) => {
        setYearLevelFilter(e.target.value);
    };

    const applyFilters = (status, block, yearLevel) => {
        let filtered = students.slice();
    
        if (status) {
            // Convert the status filter value to lowercase
            const lowercaseStatus = status.toLowerCase();
            filtered = filtered.filter(student => student.status.toLowerCase() === lowercaseStatus);
        }
        if (block) {
            filtered = filtered.filter(student => student.block === block);
        }
        if (yearLevel) {
            filtered = filtered.filter(student => student.yearlevel === yearLevel);
        }
        setFilteredStudents(filtered);
    };
    

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/students/delete/${id}`);
            fetchStudents();
        } catch (error) {
            console.error('Error deleting student:', error);
        }
    };

    return (
        <div className="bg-gray-100 p-6">
            <h2 className="text-xl font-bold mb-4">Total Students: {filteredStudents.length}</h2>
            <div className="flex space-x-4 mb-4">
                <div>
                    <label className="block font-bold">Status:</label>
                    <select value={statusFilter} onChange={handleStatusChange} className="form-select">
                        <option value="">All</option>
                        <option value="regular">Regular</option>
                        <option value="irregular">Irregular</option>
                    </select>
                </div>
                <div>
                    <label className="block font-bold">Block:</label>
                    <select value={blockFilter} onChange={handleBlockChange} className="form-select">
                        <option value="">All</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                    </select>
                </div>
                <div>
                    <label className="block font-bold">Year Level:</label>
                    <select value={yearLevelFilter} onChange={handleYearLevelChange} className="form-select">
                        <option value="">All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
                <div >
                    <button className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600  ">
                        <Link to="/addstudent">Add Student</Link>
                    </button>
                </div>
            </div>
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-gray-100 text-gray-800 uppercase">
                    <tr>
                        <th className="text-left py-3 px-4">Name</th>
                        <th className="text-left py-3 px-4">Status</th>
                        <th className="text-left py-3 px-4">Block</th>
                        <th className="text-left py-3 px-4">Year Level</th>
                        <th className="text-left py-3 px-4">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {filteredStudents.map(student => (
                        <tr key={student._id}>
                            <td className="text-left py-4 px-6">{student.fname} {student.lname}</td>
                            <td className="text-left py-4 px-6">{student.status}</td>
                            <td className="text-left py-4 px-6">{student.block}</td>
                            <td className="text-left py-4 px-6">{student.yearlevel}</td>
                            <td className="text-left py-4 px-6">
                                <button onClick={() => handleDelete(student._id)} className="bg-red-500 text-white py-2 px-4 rounded shadow hover:bg-red-600 mr-2">Delete</button>
                                <Link to={`/students/${student._id}/edit`}>
                                    <button className="bg-yellow-500 text-white py-2 px-4 rounded shadow hover:bg-yellow-600 mr-2">Update</button>
                                </Link>
                                <Link to={`/viewstudent/${student._id}`}>
                                    <button className="bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-600 mr-2">View Student</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentList;
