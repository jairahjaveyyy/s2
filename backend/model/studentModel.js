

const { Schema, model } = require('mongoose');

const studentSchema = new Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    course: { type: String, required: true },
    block: { type: String, required: true },
    yearlevel: { type: String, required: true },
    status: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    subjects: [{ type: Schema.Types.ObjectId, ref: 'Subject' }] // Array of ObjectIds referencing Subject model
});

const Student = model('students_collections', studentSchema);

module.exports = Student;
