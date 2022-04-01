const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const questionSchema = new Schema({
    answers: [question: String,
    situation: String,
    task: String,
    action: String,
    result: String]
    {
        timestamps: true,
    }
    
)


module.exports = mongoose.model('Question', questionSchema);