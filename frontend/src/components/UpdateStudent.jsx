import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdateStudent() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [course, setCourse] = useState('BSIT');
    const [block, setBlock] = useState('A');
    const [yearlevel, setYearlevel] = useState('1');
    const [status, setStatus] = useState('Regular');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [subjects, setSubjects] = useState([]);
    const [selectedSubjects, setSelectedSubjects] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchSubjects();
    }, []);
    
    const fetchSubjects = async () => {
        try {
            const response = await axios.get('/subjects/getAll');
            setSubjects(response.data.data);
            console.log(response.data.data); // Log the subjects to verify
        } catch (error) {
            console.error('Error fetching subjects:', error);
        }
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newStudent = {
            fname,
            lname,
            course,
            block,
            yearlevel,
            status,
            email,
            password,
            subjects: selectedSubjects
        };
        try {
            await axios.post('/students/update/:id', newStudent);
            setFname('');
            setLname('');
            setCourse('BSIT');
            setBlock('A');
            setYearlevel('1');
            setStatus('Regular');
            setEmail('');
            setPassword('');
            setSelectedSubjects([]);
            setError('');
            alert("Student added successfully");
        } catch (error) {
            console.error('Error adding student:', error);
            alert('Failed to add student. Please try again later.');
        }
    };

    const handleSubjectChange = (e) => {
        // Extract the selected options from the event
        const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
        // Update the selected subjects state with the selected options
        setSelectedSubjects(selectedOptions);
    };
    
    
    
    

    return (
        <div className="bg-green-100 flex items-center justify-center h-screen">
            <div className="max-w-xl bg-beige-100 shadow-md rounded-lg overflow-hidden md:flex">
                <div className="md:w-1/2 lg:w-[900px] px-6 py-8 lg:w-3/6 bg-green-200">
                <img src="https://scontent.fdvo1-1.fna.fbcdn.net/v/t39.30808-6/361285049_756300016505576_1065119465114803334_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zPPlKZuqI7gQ7kNvgFb11Bh&_nc_ht=scontent.fdvo1-1.fna&oh=00_AfDmQqa6BuSuE9Qx2uV0KqZy1QSGuivJERQUbSSqnBAjBQ&oe=6638FA80" 
                    alt="School Logo" className="mx-auto w-[60px] object-cover rounded-full" />
                    <h2 className="text-center text-2xl font-bold mb-3">Add Student</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-1">
                            <label htmlFor="fname" className="block text-gray-700 font-bold mb-1">First Name:</label>
                            <input type="text" id="fname" name="fname" value={fname} onChange={(e) => setFname(e.target.value)} className="form-input w-full" required />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="lname" className="block text-gray-700 font-bold mb-1">Last Name:</label>
                            <input type="text" id="lname" name="lname" value={lname} onChange={(e) => setLname(e.target.value)} className="form-input w-full" required />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="course" className="block text-gray-700 font-bold mb-1">Course:</label>
                            <select id="course" name="course" value={course} onChange={(e) => setCourse(e.target.value)} className="form-select w-full" required>
                                <option value="BSIT">BSIT</option>
                            </select>
                        </div>
                        <div className="mb-1">
                            <label htmlFor="block" className="block text-gray-700 font-bold mb-1">Block:</label>
                            <select id="block" name="block" value={block} onChange={(e) => setBlock(e.target.value)} className="form-select w-full" required>
                                <option value="A">A</option>
                                <option value="B">B</option>
                            </select>
                        </div>
                        <div className="mb-1">
                            <label htmlFor="yearlevel" className="block text-gray-700 font-bold mb-1">Year Level:</label>
                            <select id="yearlevel" name="yearlevel" value={yearlevel} onChange={(e) => setYearlevel(e.target.value)} className="form-select w-full" required>
                                <option value="1st Year">1st Year</option>
                                <option value="2nd Year">2nd Year</option>
                                <option value="3rd Year">3rd Year</option>
                                <option value="4th Year">4th Year</option>
                            </select>
                        </div>
                        <div className="mb-1">
                            <label htmlFor="status" className="block text-gray-700 font-bold mb-1">Status:</label>
                            <select id="status" name="status" value={status} onChange={(e) => setStatus(e.target.value)} className="form-select w-full" required>
                                <option value="Regular">Regular</option>
                                <option value="Irregular">Irregular</option>
                            </select>
                        </div>
                        <div className="mb-1">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-1">Email:</label>
                            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input w-full" required />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="password" className="block text-gray-700 font-bold mb-1">Password:</label>
                            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-input w-full" required />
                        </div>
                        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mt-4">Add Student</button>
                        {error && <div className="text-red-600">{error}</div>}
                    </form>
                </div>
                <div className="md:w-1/2 lg:w-[900px]  bg-white text-center py-10">
                    <h2 className="text-center text-2xl font-bold mb-6">Select Subjects</h2>
                    {subjects.map(subject => (
                        <div key={subject._id} className="flex items-center p-2  px-4 py-2">
                            <input type="checkbox" id={subject._id} value={subject._id} onChange={handleSubjectChange} />
                            <label htmlFor={subject._id}>{subject.subjectname}</label>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default UpdateStudent;
