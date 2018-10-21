var Submission = require('../models/submit');


exports.index = function (req, res, next) {

    var user = req.params.id;
    Submission.find({ employeeId: user }).sort('-dateCompleted').exec(function (err, quizzes) {
        if (err) return res.status(500).send(err);
        return res.status(200).send(quizzes);
    });

};