const { Schema, model} = require('mongoose')


const subjectTable = Schema({
    code: {type: String, required: true},
    subjectname: {type: String, required: true},
    units: {type: String, required: true},
    year: {type: String, required: true},
    prerequisite: {type: String, required: true},

})

module.exports = model('subject_collection', subjectTable)