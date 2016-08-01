'use strict';

const devConfig = {
  databaseConfig: {
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'Berna',
    // password: 'postgres',
  },
  MIN_PASSWORD_LENGTH: 8,
  APPLICATION_PORT: 3000,
}

module.exports = () => {
  switch(process.env.NODE_ENV) {
    case 'dev':
      return devConfig;
    case 'prod':
      return prodConfig;
    default:
      return devConfig;
  };
};
