'use strict';

var conn 					= require('./../config/connect');
var response 			= require('./../lib/response');
const queryBuilder = require('./../lib/queryBuilders');
var md5						= require('md5');
const { validationResult } = require('express-validator');


module.exports = {
	detail	: function(req, res) {
		var id = req.params.id;
		conn.query("select * from users where id=?", [id],(err, results, fields) => {
			if(err) response.error("Errors : " + err.sqlMessage, res);
			response.ok(results, res);
		})
	},

	lists 	: function(req, res) {
		var conditions = queryBuilder.conditions()
		var where = "";
		if(conditions[1].length > 0){
			where = "WHERE "+conditions[0];
		}

		conn.query("select * from users "+where, conditions[1], (err, results, fields) => {
			if(err) response.error("Errors : " + err.sqlMessage, res);
			response.ok(results, res);
		})
	},

	create	: function(req, res) {
		const error = validationResult(req)

		if(!error.isEmpty()){
			response.error(error.array(), res)
			return
		}

		var data = {
			name			: req.body.name, 
			email			: req.body.email,
			password 	: md5(req.body.password)
		};

		conn.query("insert into users set ?", data, function (err, results, fields) {
			var resQuery = {insertId: results.insertId};
			response.ok(resQuery, res)
		})
	},

}
