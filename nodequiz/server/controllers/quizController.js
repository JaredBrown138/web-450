var Quiz = require('../models/quiz');

exports.index = function (req, res, next) {
  if (req.params.id == undefined) {
    console.log("test");
    Quiz.getAll(function (err, quizzes) {
      res.status(200).send(quizzes);
    });
  } else {
    Quiz.getById(req.params.id, function (err, quiz) {
      if (err) {
        res.status(500).send({ quizFound: false });
        console.log(err);
      } else {
        if (!quiz) {
          res.status(404).send({ quizFound: false });
        } else {
          res.status(200).send(quiz);
        }
      }
    });
  }
};
