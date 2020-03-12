const db = require("../db.js");
const Week = require("./Week.js");
const User = require("./User.js");

Week.sync({ alter: true });
User.sync({ alter: true });
