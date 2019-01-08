const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8000;
const databaseConnect = require('./apps/config/connect')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

require('./apps/routes')(app, databaseConnect);

const server = app.listen(port, () => {
	console.log(`running node on ${port}`);
});

module.exports = server;