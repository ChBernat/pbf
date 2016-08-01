'use strict';

const repo = require('./repo');

module.exports = (req, res) => {
  repo.getTotalUsersNumber()
    .then(total => res.status(200).json(total))
    .catch(err => res.status(200).json(err.message));
}
