const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8000;
const databaseConnect = require('./apps/config/connect')
// const token = require('./apps/lib/auth/validateToken');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(token.verifyToken);

require('./apps/routes')(app, databaseConnect);

app.listen(port, () => {
	console.log(`running node on ${port}`);
});