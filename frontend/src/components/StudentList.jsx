import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Assuming you're using React Router


function StudentList() {
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [statusFilter, setStatusFilter] = useState('');
    const [blockFilter, setBlockFilter] = useState('');
    const [yearLevelFilter, setYearLevelFilter] = useState('');

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await axios.get('/students/getAll');
            setStudents(response.data);
            applyFilters(statusFilter, blockFilter, yearLevelFilter);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    const handleStatusChange = (e) => {
        setStatusFilter(e.target.value);
        applyFilters(e.target.value, blockFilter, yearLevelFilter);
    };

    const handleBlockChange = (e) => {
        setBlockFilter(e.target.value);
        applyFilters(statusFilter, e.target.value, yearLevelFilter);
    };

    const handleYearLevelChange = (e) => {
        setYearLevelFilter(e.target.value);
        applyFilters(statusFilter, blockFilter, e.target.value);
    };

    const applyFilters = (status, block, yearLevel) => {
        let filtered = students.slice(); // Create a copy of the students array
        
        if (status) {
            filtered = filtered.filter(student => student.status === status);
        }
        if (block) {
            filtered = filtered.filter(student => student.block === block);
        }
        if (yearLevel) {
            filtered = filtered.filter(student => student.yearLevel === yearLevel);
        }
        setFilteredStudents(filtered);
    };
    

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/students/delete${id}`);
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
                {/* Add other options as needed */}
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
        <div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600">
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
                <tr key={student.id}>
                    <td className="text-left py-4 px-6">{student.name}</td>
                    <td className="text-left py-4 px-6">{student.status}</td>
                    <td className="text-left py-4 px-6">{student.block}</td>
                    <td className="text-left py-4 px-6">{student.yearLevel}</td>
                    <td className="text-left py-4 px-6">
                        <button onClick={() => handleDelete(student.id)} className="bg-red-500 text-white py-2 px-4 rounded shadow hover:bg-red-600 mr-2">Delete</button>
                        <Link to={`/students/${student.id}`}>
                            <button className="bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-600">View Student</button>
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
