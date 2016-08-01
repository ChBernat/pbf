'use strict';

const db = require(`${rootPath}/common/db`).db;
// const sodium = require('sodium').api;
const config = require(`${rootPath}/config`);
const localHelpers = require('./helpers');
const globalHelpers = require(`${rootPath}/common/helpers`);

// const sender = sodium.crypto_box_keypair();
// const receiver = sodium.crypto_box_keypair();
// const nonce = new Buffer(sodium.crypto_box_NONCEBYTES);
// sodium.randombytes_buf(nonce);

const createUser = (user) => {
  if(globalHelpers.validateDatabaseObject(user, localHelpers.userProperties)){
    // user.password = sodium.crypto_box(user.password, nonce, receiver.publicKey, sender.secretKey);
    return db.users.findyAny('username', user.username)
      .then(usersFromDB => usersFromDB.some(userFromDB => userFromDB.username === user.username))
      .then(isUsernameTaken => localHelpers.checkIsUsernameNotTaken(isUsernameTaken, user))
      .then(db.users.add);
  } else {
    throw Error('Wrong user object!')
  }
};

const login = (userCredentials) => {
  if (userCredentials.username && userCredentials.password) {
        return db.users.find('username', userCredentials.username)
          .then(user => { // user.password -> after decryption (TODO)
            if(user.password === userCredentials.password)
              return user
            throw Error('Wrong password!');
          });
      }
}

const getUser = (id) => {
  if (id && !!(id*1)) {
    return db.users.find('id', +id)
      .then(user => {
        delete user.password;
        if(user)
          return user;
        throw Error('No such user, error number: '); // error numbers TODO
      });
  };
};

const deleteUser = (id) => {
  if (id && !!(id*1)) {
    return db.users.remove('id', id);
  }
  throw Error("Wrong ID!");
}

const getAllUsers = () => db.users.all();

const getTotalUsersNumber = () => db.users.total();

module.exports = {
  getTotalUsersNumber,
  getAllUsers,
  deleteUser,
  createUser,
  getUser,
  login,
}
