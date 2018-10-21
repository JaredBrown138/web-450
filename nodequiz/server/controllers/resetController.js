var User = require('../models/user');
var Submission = require('../models/submit');

exports.index = function (req, res, next) {

    if (req.params.id == undefined) {
        console.log("test");
        res.status(404).send({ message: "Invalid EmployeeId" });

    } else {

        User.findOne({ employeeId: req.params.id }, function (err, user) {
            user.avgScore = 999;
            user.quizzesCompleted = 0;
            user.save();
        });
        Submission.deleteMany({ employeeId: req.params.id }, function (err) {
            if (err) {
                res.status(500).send({ message: err });
            } else {
                res.status(200).send({ message: "Action Completed" });
            }
        });

    }

};
