'use strict';

const repo = require('./repo');

module.exports = (req, res) => {
  repo.createUser(req.body)
    .then(id =>   res.status(200).json(`User has been created successfully with id of ${id}`))
    .catch(err => res.status(200).json(err.message));
};
