'use strict';


const userProperties = [
  'username',
  'password',
  'avatar_name',
  'creation_date',
  'last_modification_date',
  'group_id',
];

const checkIsUsernameNotTaken = (isUsernameTaken, user) => {
  if (!isUsernameTaken) return user;
  throw Error('This username has been already taken!');
}

module.exports = {
  userProperties,
  checkIsUsernameNotTaken,
}
