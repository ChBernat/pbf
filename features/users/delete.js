'use strict';

const repo = require('./repo');

module.exports = (req, res) => {
  repo.deleteUser(req.params.id)
    .then(rowCount => res.status(200).json(rowCount))
    .catch(err => res.status(200).json(err.message));
}
