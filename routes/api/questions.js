const express = require('express');
const router = express.Router();
const questionCtrl = require('../../controllers/questions');


router.post('/questions', questionCtrl.create);



module.exports = router;