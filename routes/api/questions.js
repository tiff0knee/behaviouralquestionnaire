const express = require('express');
const router = express.Router();
const questionCtrl = require('../../controllers/questions');


router.post('/questions', questionCtrl.create);
router.get('/questions', questionCtrl.index );



module.exports = router;