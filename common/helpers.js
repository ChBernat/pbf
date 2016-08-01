'use strict';

const validateDatabaseObject = (object, arrayOfProperKeys) => {
  if(Object.keys(object).length === arrayOfProperKeys.length){
    for(const key of arrayOfProperKeys){
      if(!object[key]){
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};


module.exports = {
  validateDatabaseObject,
}
