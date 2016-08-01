"use strict";

const express = require('express');
const app = express();
require('./globals')();
const config = require("./config")();
const bodyParser = require('body-parser');
const db = require(`${rootPath}/common/db`).db;

// db.users.drop();
// db.users.create();

app.use(bodyParser.json());

app.use('/users', require(`${rootPath}/features/users`));

app.listen(config.APPLICATION_PORT, console.log(`Listening on port ${config.APPLICATION_PORT}`));
