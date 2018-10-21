var Submission = require('../models/submit');


exports.index = function (req, res, next) {

    var quizzes = req.body.quizzes;
    var responseArray = [];

    Submission.find({}, function (err, allQuizzes) {
        quizzes.forEach(element => {
            var avg = 0;
            var count = 0;
            var writeObject = {};
            allQuizzes.forEach(el => {
                if (el.quizId == element.quizId) {
                    count += 1;
                    avg = avg + el.score;
                }
            });
            var avg = (avg / count);
            writeObject.quizId = element.quizId;
            console.log(element['title']);
            writeObject['title'] = element['title'];
            writeObject.avgScore = avg;
            responseArray.push(writeObject);
        })
        res.status(200).send(responseArray);

    });


};