'use strict';

const sql = require('../sql').comments;

module.exports = (rep, pgp) => {
  return {
    countAllInTopic: (id) => rep.one(`SELECT count(*) FROM Comments WHERE post_id = ${id}`, id, r => +r.count),
    countAllOfUser: (id) => rep.one(`SELECT count(*) FROM Comments WHERE user_id = ${id}`, id, r => +r.count),
    create: () => rep.none(sql.create),
    remove: (id) => rep.result(`DELETE from Comments WHERE id = ${id}`, id, r => r.rowCount),
    empty: () => repo.none(sql.empty),
    total: () => repo.one('SELECT count(*) FROM Comments', [], r => +r.count),
    find: (id) => repo.oneOrNone(`SELECT from Comments where id = ${id}`),
    drop: () => rep.none(sql.drop),
    add: (comment) => rep.one(sql.add, comment, comment => comment.id),
    all: () => rep.any('SELECT * FROM Comments'),
  }
};
