var Submission = require('../models/submit');
var User = require('../models/user');

exports.index = function (req, res, next) {

    var submission = new Submission(req.body);
    console.log(req.body.userId);
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

    submission.save(err => {
        if (err) return res.status(500).send({ message: err });
        return res.status(200).send({ message: "Saved" });
    });

};

