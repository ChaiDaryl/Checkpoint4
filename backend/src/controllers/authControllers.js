const models = require("../models");

const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  const { email } = req.body;
  models.user
    .findByEmailWithPassword(email)
    .then(([users]) => {
      if (users[0]) {
        [req.user] = users;
        next();
      } else res.sendStatus(401);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};
const isUserAdmin = (req, res, next) => {
  const id = req.payloads.sub;
  models.user
    .isUserAdmin(id)
    .then(([isAdmin]) => {
      if (isAdmin[0].is_admin) next();
      else res.sendStatus(401);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

module.exports = {
  getUserByEmailWithPasswordAndPassToNext,
  isUserAdmin,
};
