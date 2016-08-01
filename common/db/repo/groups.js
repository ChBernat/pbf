'use strict';

const sql = require('../sql').groups;

module.exports = (rep, pgp) => {
  return {
    create: () => rep.none(sql.create),
    remove: (id) => rep.result(`DELETE from Groups WHERE id = ${id}`, id, r => r.rowCount),
    empty: () => repo.none(sql.empty),
    total: () => repo.one('SELECT count(*) FROM Groups', [], a => +a.count),
    find: (id) => repo.oneOrNone(`SELECT from Groups where id = ${id}`),
    drop: () => rep.none(sql.drop),
    add: (group) => rep.one(sql.add, group, group => group.id),
    all: () => rep.any('SELECT * FROM Groups'),
  }
};
