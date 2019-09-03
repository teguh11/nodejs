'use strict';

var conn 					= require('./../config/connect');
var response 			= require('./../lib/response');
var md5						= require('md5');
const { validationResult } = require('express-validator');


module.exports = {
	lists 	: function(req, res) {
		conn.query("select id, name from client_type", (err, results, fields) => {
			if(err) console.log("Errors : " + err.sqlMessage);
			response.ok(results, res);
		})
  },
  detail : function(req, res){
    var id = req.params.id;
		conn.query("select id, name from client_type where id=?", [id],(err, results, fields) => {
			if(err) console.log("Errors : " + err.sqlMessage);
			response.ok(results, res);
		})
  }
}
