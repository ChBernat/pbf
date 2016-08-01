'use strict';

const bluebird = require("bluebird");

const repos = {
  posts: require('./repo/posts'),
  users: require('./repo/users'),
  groups: require('./repo/groups'),
  comments: require('./repo/comments'),
};

const options = {
  promiseLib: bluebird,
  extend: obj => {
    // 1. Do not use 'require()' here, because this event occurs for every task
    //    and transaction being executed, which should be as fast as possible.
    // 2. We pass in `pgp` in case it is needed when implementing the repository;
    //    for example, to access namespaces `.as` or `.helpers`
    // Those lines are WARNING and keys to keep application performance-wise.
    // Those lines have been copied from pg-promise author site.

    obj.users = repos.users(obj, pgp);
    obj.posts = repos.posts(obj, pgp);
    obj.groups = repos.groups(obj, pgp);
    obj.comments = repos.comments(obj, pgp);
  }
};

const pgp = require("pg-promise")(options);
const db = pgp(require(`${rootPath}/config`)().databaseConfig);

module.exports = {
  pgp,
  db,
};
