require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();
server.use(helmet(),
express.json(),
cors());

module.exports = server;