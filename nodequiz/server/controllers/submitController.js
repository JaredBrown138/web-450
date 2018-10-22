var Submission = require('../models/submit');
var User = require('../models/user');

/**
 * Saves the quiz submission to the database,
 * as well as updates the users information.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.index = function (req, res, next) {

    var submission = new Submission(req.body);
    console.log(req.body.userId);
    /**
     * Update the user information like the new average and the number of
     * quizzes completed.
     */
    User.findOne({ employeeId: req.body.employeeId }, function (err, user) {
        if (user.avgScore == 999) {
            user.avgScore = req.body.score;
        } else {
            var newAverage = ((user.avgScore * user.quizzesCompleted) + req.body.score) / (user.quizzesCompleted + 1);
            user.avgScore = newAverage;
        }
        user.quizzesCompleted = user.quizzesCompleted + 1;
        user.save();
    });
    /**
     * Save the submission
     */
    submission.save(err => {
        if (err) return res.status(500).send({ message: err });
        return res.status(200).send({ message: "Saved" });
    });

};

