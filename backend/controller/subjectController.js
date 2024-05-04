
const Subject = require('../model/subjectModel');

// Get all subjects
const getAllSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find();
        res.json({ success: true, data: subjects });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get a single subject
const getSubjectById = async (req, res) => {
    try {
        const subject = await Subject.findById(req.params.id);
        if (!subject) {
            return res.status(404).json({ success: false, message: 'Subject not found' });
        }
        res.json({ success: true, data: subject });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const createSubject = async (req, res) => {
    try {
        const { name, description } = req.body;

        // Check if a subject with the same name already exists
        const existingSubject = await Subject.findOne({ name });

        if (existingSubject) {
            return res.status(400).json({ success: false, message: 'Subject already exists' });
        }

        // Create the subject
        const subject = new Subject({ name, description });
        await subject.save();

        res.status(201).json({ success: true, message: 'Subject created', data: subject });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Update a subject
const updateSubjectById = async (req, res) => {
    try {
        const subject = await Subject.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!subject) {
            return res.status(404).json({ success: false, message: 'Subject not found' });
        }
        res.json({ success: true, message: 'Subject updated', data: subject });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Delete a subject
const deleteSubjectById = async (req, res) => {
    try {
        const subject = await Subject.findByIdAndDelete(req.params.id);
        if (!subject) {
            return res.status(404).json({ success: false, message: 'Subject not found' });
        }
        res.json({ success: true, message: 'Subject deleted', data: subject });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = { getAllSubjects, getSubjectById, createSubject, updateSubjectById, deleteSubjectById };
