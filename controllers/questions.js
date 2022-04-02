const QuestionModel = require('../models/question');

module.exports = {
    create,

}

async function create(req, res) {
    try{
        await QuestionModel.create({answer: req.body.answer})
        res.status(200).json('ok')
    } catch(err){
        res.json(err);
    }
}


