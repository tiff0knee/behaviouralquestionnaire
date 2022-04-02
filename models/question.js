const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const questionSchema = new Schema({
    question: {question: String,
    situation: String,
    task: String,
    action: String,
    result: String}},
    {
        timestamps: true,
    }
    
)


let QuestionModel = mongoose.model('Question', questionSchema);
module.exports = QuestionModel;