'use strict';

var response 			= require('./../lib/response');
var queryBuilders = require('./../lib/queryBuilders');
var config				= require('./../config/config');
var conn 					= require('./../config/connect');
var jwt						= require('jsonwebtoken');
var md5						= require('md5');
var moment 				= require('moment');
var verifyToken		= require('./../lib/auth/validateToken');

module.exports = {
	detail	: function(req, res) {
		var id = userInfo.id;
		
		conn.query("select * from user where id=?", [id],(err, results, fields) => {
			if(err) console.log("Errors : " + err.sqlMessage);
			response.ok(results, res);
		})
	},

	lists 	: function(req, res) {
		conn.query("select * from user", (err, results, fields) => {
			if(err) console.log("Errors : " + err.sqlMessage);
			response.ok(results, res);
		})
	},

	create	: function(req, res) {
		var CURRENT_TIMESTAMP = { toSqlString: function() { return 'CURRENT_TIMESTAMP()'; } };

		var data = {name	: req.body.name, address	: req.body.address, email	: req.body.email, password	: md5(req.body.password), created_at	: CURRENT_TIMESTAMP, updated_at	: CURRENT_TIMESTAMP, status : 1};
		conn.query("insert into user set ?", data, function (err, results, fields) {
			var token = jwt.sign({id : results.insertId}, config.jwt.secret_key, {expiresIn : 86400});

			var resQuery = {insertId: results.insertId, token : token};
			response.ok(resQuery, res)
		})
	},

	update : function (req, res) {
		var conditions = {"id" : req.params.id};
		var [sql, value] = queryBuilders.update('user', req.body, conditions);

		conn.query(sql, value, function(err, results, fields) {
			if(err) console.log(err);
			response.ok(results,res);
		})
	},

	delete : function(req, res) {
		var conditions = {"id" : req.params.id};
		var [sql, value] = queryBuilders.softDelete('user', conditions);

		conn.query(sql, value, function(err, results, fields) {
			response.ok(results, res);
		})
	}

}
