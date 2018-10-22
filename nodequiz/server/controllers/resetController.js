var User = require('../models/user');
var Submission = require('../models/submit');

/**
 * Resets the users information
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.index = function (req, res, next) {

    if (req.params.id == undefined) {
        console.log("test");
        res.status(404).send({ message: "Invalid EmployeeId" });

    } else {

        User.findOne({ employeeId: req.params.id }, function (err, user) {
            user.avgScore = 999; //Set avg to 999 to denote no avg exists yet. 
            user.quizzesCompleted = 0;
            user.save();
        });
        /**
         * Delete all of the quiz attempts associated with the user
         */
        Submission.deleteMany({ employeeId: req.params.id }, function (err) {
            if (err) {
                res.status(500).send({ message: err });
            } else {
                res.status(200).send({ message: "Action Completed" });
            }
        });

    }

};
