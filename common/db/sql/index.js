'use strict';

const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

const sql = (file) => {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, {
    minify: true,
    params: {
      schema: 'public'
    },
  });
}

module.exports = {
  users: {
    create: sql('users/create.sql'),
    empty: sql('users/empty.sql'),
    drop: sql('users/drop.sql'),
    add: sql('users/add.sql'),
  },
  comments: {
    create: sql('comments/create.sql'),
    empty: sql('comments/empty.sql'),
    drop: sql('comments/drop.sql'),
    add: sql('comments/add.sql'),
  },
  posts: {
    create: sql('posts/create.sql'),
    empty: sql('posts/empty.sql'),
    drop: sql('posts/drop.sql'),
    add: sql('posts/add.sql'),
  },
  groups: {
    create: sql('groups/create.sql'),
    empty: sql('groups/empty.sql'),
    drop: sql('groups/drop.sql'),
    add: sql('groups/add.sql'),
  },
}
