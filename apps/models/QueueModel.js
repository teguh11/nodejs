'use strict';

var conn 					= require('./../config/connect');
var response 			= require('./../lib/response');
var md5						= require('md5');
const { validationResult } = require('express-validator');


module.exports = {
	detail	: function(req, res) {
		var id = req.params.id;
		conn.query("select * from queue where id=?", [id],(err, results, fields) => {
			if(err) console.log("Errors : " + err.sqlMessage);
			response.ok(results, res);
		})
	},

	lists 	: function(req, res) {
		conn.query("select * from queue", (err, results, fields) => {
			if(err) console.log("Errors : " + err.sqlMessage);
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
			client_id			: req.body.client_id, 
			current_queue : req.body.current_queue,
      max_queue 	  : req.body.max_queue,
		};

		conn.query("insert into queue set ?", data, function (err, results, fields) {
			var resQuery = {insertId: results.insertId};
			response.ok(resQuery, res)
		})
	},

}
