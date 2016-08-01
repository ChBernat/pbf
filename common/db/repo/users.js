'use strict';

const sql = require('../sql').users;

module.exports = (rep, pgp) => {
  return {
    countAllOfGroup: (id) => rep.one(`SELECT count(*) FROM Users WHERE user_id = '${id}'`, id, r => +r.count),
    create: () => rep.none(sql.create),
    remove: (field, value) => rep.result(`DELETE from Users WHERE ${field} = '${value}'`, value, r => r.rowCount),
    empty: () => rep.none(sql.empty),
    total: () => rep.one('SELECT count(*) FROM Users', [], a => +a.count),
    find: (field, value) => rep.oneOrNone(`SELECT * from Users where ${field} = '${value}'`),
    findyAny: (field, value) => rep.any(`SELECT * from Users where ${field} = '${value}'`),
    drop: () => rep.none(sql.drop),
    add: (user) => rep.one(sql.add, user, user => user.id),
    all: () => rep.any('SELECT * FROM Users'),
  }
};
