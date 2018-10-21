var express = require('express');
var router = express.Router();

let user_controller = require('../controllers/userController');
let quiz_controller = require('../controllers/quizController');
let submit_controller = require('../controllers/submitController');
let completed_controller = require('../controllers/completedController');
let reset_controller = require('../controllers/resetController');
let quizStats_controller = require('../controllers/quizStatsController')

router.get('/user/:id', user_controller.index);
router.get('/user/', user_controller.index);
router.get('/quiz/:id', quiz_controller.index);
router.get('/quiz/', quiz_controller.index);
router.post('/submit', submit_controller.index);
router.get('/completed/:id', completed_controller.index);
router.get('/reset/:id', reset_controller.index);
router.post('/quizstats', quizStats_controller.index);

module.exports = router;
