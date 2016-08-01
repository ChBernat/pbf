'use strict';

const repo = require('./repo');

module.exports = (req, res) => {
  repo.getUser(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(200).json(err.message));
}
