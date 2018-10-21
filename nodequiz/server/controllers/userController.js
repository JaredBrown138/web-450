var User = require('../models/user');

exports.index = function (req, res, next) {
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
};
