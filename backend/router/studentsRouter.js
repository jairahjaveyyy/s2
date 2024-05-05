
const express = require('express');
const router = express.Router();
const {
    getAllStudents,
    getStudentById,
    createStudentWithSubjects,
    updateStudentById,
    deleteStudentById,
} = require('../controller/studentContoller');

// Routes for CRUD operations
router.get('/getAll', getAllStudents); // Get all students
router.get('/:id', getStudentById); // Get a single student by ID
router.post('/create', createStudentWithSubjects); // Create a student
router.put('/update/:id', updateStudentById); // Update a student by ID
router.delete('/delete/:id', deleteStudentById); // Delete a student by ID

module.exports = router;
