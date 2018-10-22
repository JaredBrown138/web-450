var Quiz = require('../models/quiz');

/**
 * Returns all of the quizzes if not quiz is specificed (/api/quiz/A001)
 * If specified, return that one quiz.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
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
