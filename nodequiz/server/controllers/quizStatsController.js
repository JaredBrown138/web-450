var Submission = require('../models/submit');

/**
 * Return stats on all quizzes specified in the request
 * body.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.index = function (req, res, next) {

    var quizzes = req.body.quizzes;
    var responseArray = [];

    Submission.find({}, function (err, allQuizzes) { //get all completed quizzes
        //foreach quiz specified in the body
        quizzes.forEach(element => {
            var avg = 0;
            var count = 0;
            var writeObject = {};
            allQuizzes.forEach(el => {
                //check to see if the quizId of the quizzes match
                if (el.quizId == element.quizId) {
                    //if so add it to the average
                    count += 1;
                    avg = avg + el.score;
                }
            });
            var avg = (avg / count);
            //Create a object with the information about the specified quiz
            writeObject.quizId = element.quizId;
            console.log(element['title']);
            writeObject['title'] = element['title'];
            writeObject.avgScore = avg;
            //Add that object to the response array
            responseArray.push(writeObject);
            //Move on to the next quiz specified in the body
        })
        res.status(200).send(responseArray);

    });


};