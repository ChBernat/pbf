'use strict';

const db = require(`${rootPath}/common/db`).db;
const bluebird = require('bluebird');
const localHelpers = require(`./helpers`);
const globalHelpers = require(`${rootPath}/common/helpers`);

const add = (post) => {
  return promiseFactory(
    post,
    globalHelpers.validateDatabaseObject(post, localHelpers.properKeyList),
    reject(Error('Post object is invalid, error number: #$@'))
  )
    .then(postObject => {
      return db.posts.add(postObject);
    });
};

const getPost = (id) => {
  return promiseFactory(
    id,
    id && !!(id*1),
    Error('Invalid id, error number: #$@')
  )
    .then(id => {
      return db.posts.find('id', id);
    });
};

const getAll = () => {
  return promiseFactory(
    id,
    id && !!(id*1),
    Error('Invalid id, error number: #$@')
  )
    .then(posts => {
      return db.posts.all();
    });
};

const remove = () => {

};

module.exports = {
  getPost,
  getAll,
  remove,
  add,
};
