import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ViewStudent() {
    const { id } = useParams();
    const [student, setStudent] = useState({});

    useEffect(() => {
        fetchStudent();
    }, []);

    const fetchStudent = async () => {
        try {
            // Ensure only the ID is passed without any additional characters like ':id'
            const response = await axios.get(`/students/${id}`);
            console.log('Student data:', response.data.data);
            setStudent(response.data.data);
        } catch (error) {
            console.error('Error fetching student:', error);
        }
    };
    
    return (
        <div>
            <h2>Student Details</h2>
            <p>Name: {student.fname} {student.lname}</p>
            <p>Course: {student.course}</p>
            <p>Block: {student.block}</p>
            <p>Year Level: {student.yearlevel}</p>
            <p>Status: {student.status}</p>
            <p>Subjects:</p>
            <ul>
                {student.subjects && student.subjects.map(subject => (
                    <li key={subject._id}>{subject.subjectname}</li>
                ))}
            </ul>
        </div>
    );
}

export default ViewStudent;
