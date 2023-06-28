const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const db = process.env.mongo_uri

mongoose.connect(db,
{useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose