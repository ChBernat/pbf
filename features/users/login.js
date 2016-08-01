'use strict';

const repo = require('./repo');

module.exports = (req, res) => {
  repo.login(req.body)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(200).json(err.message));
}
