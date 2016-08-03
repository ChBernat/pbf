'use strict';

const repo = require('./repo');

module.exports = (req, res) => {
  repo.add(req.body)
    .then(postId => res.status(200).json(postId))
    .catch(err => res.status(200).json(err.message));
};
