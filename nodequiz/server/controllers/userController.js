var User = require('../models/user');
/**
 * Returns either all of the users or a specific
 * user.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.index = function (req, res, next) {

  /** 
   * If no user id is supplied, return all users
 */
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
    /** 
     * If userId is supplied, fetch that record
     */
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
