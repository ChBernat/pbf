'use strict';

const sql = require('../sql').posts;

module.exports = (rep, pgp) => {
  return {
    countAllOfUser: (id) => rep.one(`SELECT count(*) FROM Posts WHERE user_id = ${id}`, id, r => +r.count),
    create: () => rep.none(sql.create),
    remove: (id) => rep.result(`DELETE from Posts WHERE id = ${id}`, id, r => r.rowCount),
    empty: () => repo.none(sql.empty),
    total: () => repo.one('SELECT count(*) FROM Posts', [], a => +a.count),
    find: (id) => repo.oneOrNone(`SELECT from Posts where id = ${id}`),
    drop: () => rep.none(sql.drop),
    add: (post) => rep.one(sql.add, post, post => post.id),
    all: () => rep.any('SELECT * FROM Posts'),
  }
};
