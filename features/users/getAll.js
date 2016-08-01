'use strict';

const repo = require('./repo');

module.exports = (req, res) => {
  repo.getAllUsers()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(200).json(err.message));
};
