var databaseEnv = require('./config');
var mysql = require('mysql');


var connection = mysql.createConnection({
	host	: databaseEnv.database.host,
	user	: databaseEnv.database.user,
	password	: databaseEnv.database.password,
	database	: databaseEnv.database.database
})

connection.connect(function(err) {
	if(err) throw err;
})

module.exports = connection;

