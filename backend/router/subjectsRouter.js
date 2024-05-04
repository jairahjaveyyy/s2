
const express = require('express');
const router = express.Router();
const { getAllSubjects, getSubjectById, createSubject, updateSubjectById, deleteSubjectById } = 
require('../controller/subjectController');


router.get('/getAll', getAllSubjects); // Get all subjects
router.get('/getOne', getSubjectById); // Get a single subject by ID
router.post('/create', createSubject); // Create a subject
router.put('/update/:id', updateSubjectById); // Update a subject by ID
router.delete('/delete/:id', deleteSubjectById); // Delete a subject by ID

module.exports = router
