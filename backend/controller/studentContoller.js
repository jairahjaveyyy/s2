
const Student = require('../model/studentModel');
const Subject =require('../model/subjectModel')

// Get all students
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json({ success: true, data: students });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get a single student by ID with populated subjects
const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id).populate('subjects');
        if (!student) {
            return res.status(404).json({ success: false, message: 'Student not found' });
        }
        res.json({ success: true, data: student });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


// Create a student with subjects
const createStudentWithSubjects = async (req, res) => {
    try {
        // Extract student details and subjects from request body
        const { fname, lname, course, block, yearlevel, status, email, password, subjects } = req.body;

        // Check if subjects array is provided
        if (!Array.isArray(subjects)) {
            return res.status(400).json({ success: false, message: 'Subjects must be provided as an array' });
        }

        // Check if all subjects exist before creating the student
        const existingSubjects = await Subject.find({ _id: { $in: subjects } });
        if (existingSubjects.length !== subjects.length) {
            return res.status(400).json({ success: false, message: 'One or more subjects do not exist' });
        }

        // Create the student
        const student = new Student({
            fname,
            lname,
            course,
            block,
            yearlevel,
            status,
            email,
            password,
            subjects: existingSubjects.map(subject => subject._id) // Store only the IDs of the subjects
        });

        // Save the student
        await student.save();

        res.status(201).json({ success: true, message: 'Student created', data: student });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};


// Update a student by ID
const updateStudentById = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!student) {
            return res.status(404).json({ success: false, message: 'Student not found' });
        }
        res.json({ success: true, message: 'Student updated', data: student });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Delete a student by ID
const deleteStudentById = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({ success: false, message: 'Student not found' });
        }
        res.json({ success: true, message: 'Student deleted', data: student });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = { getAllStudents, getStudentById, createStudentWithSubjects, updateStudentById, deleteStudentById };
