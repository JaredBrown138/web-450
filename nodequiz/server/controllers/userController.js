var User = require('../models/user');

exports.index = function (req, res, next) {

  if (req.params.id == undefined) {
    console.log("test");
    User.getAll(function (err, quizzes) {
      if (err) {
        res.status(500).send(err);
        console.log(err);
      } else {
        res.status(200).send(quizzes);
      }
    });

  } else {

    User.getById(req.params.id, function (err, user) {
      if (err) {
        res.status(500).send({ authenticated: false });
        console.log(err);
      } else {
        if (!user) {
          res.status(200).send({ authenticated: false });
        } else {
          res.status(200).send(user);
        }
      }
    });

  }

};
