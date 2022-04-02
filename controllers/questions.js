const QuestionModel = require('../models/question');

module.exports = {
    create,
    index
}

async function create(req, res) {
    try{
        await QuestionModel.create({answer: req.body.answer})
        res.status(200).json('ok')
    } catch(err){
        res.json(err);
    }
}

async function index(req,res) {
    try{
        const question = await QuestionModel.find({})
        console.log(question)
        res.status(200).json(question)
    } catch(err){
        res.status(400).json(err);
    }
}


