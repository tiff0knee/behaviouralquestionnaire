const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const answerSchema = new Schema({
    response: String

})

const questionSchema = new Schema({
    question: String,
    date: {type: Date, 
    default() {
        return new Date.getFullYear();
    }},
    topics: [String],
    answer: [answerSchema]},

    {
        timestamps: true,
    }
    
)


module.exports = mongoose.model('Question', questionSchema);