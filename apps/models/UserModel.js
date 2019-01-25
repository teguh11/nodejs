'use strict';

var response 			= require('./../lib/response');
var validateInput = require('./../lib/validateInput');
var queryBuilders = require('./../lib/queryBuilders');
var config				= require('./../config/config');
var conn 					= require('./../config/connect');
var jwt						= require('jsonwebtoken');
var md5						= require('md5');
var moment 				= require('moment');
var verifyToken		= require('./../lib/auth/validateToken');
var axios					= require('axios');
var adapter 			= require('axios/lib/adapters/http');
var fs 						= require('fs');
var path  				= require('path');

module.exports = {
	errorMessages : [], 
	detail	: function(req, res) {
		var id = userInfo.id;
		
		conn.query("select * from user where id=?", [id],(err, results, fields) => {
			if(err) console.log("Errors : " + err.sqlMessage);
			response.ok(results, res);
		})
	},

	lists 	: function(req, res) {
		conn.query("select * from users", (err, results, fields) => {
			if(err) console.log("Errors : " + err.sqlMessage);
			response.ok(results, res);
		})
	},

	create	: function(req, res) {
		var errorMessages = [];
		if(!validateInput.email(req.body.email))
		{
				errorMessages.push("Email not valid");
		}

		if(!validateInput.integerOnly(req.body.phone_number))
		{
				errorMessages.push("Phone not valid");
		}
 
		if(!validateInput.stringOnly(req.body.name))
		{
				errorMessages.push("Name only string");
		}

		if(errorMessages.length > 0)
		{
			response.error(errorMessages, res);
			return false;
		}

		var data = {
							name	: req.body.name, 
							email	: req.body.email,
							phone_number : req.body.phone_number
						};

		conn.query("insert into users set ?", data, function (err, results, fields) {
			// var token = jwt.sign({id : results.insertId}, config.jwt.secret_key, {expiresIn : 86400});
			var resQuery = {insertId: results.insertId};
			response.ok(resQuery, res)
		})
	},

	update : function (req, res) {
		var conditions = {"id" : req.params.id};
		var [sql, value] = queryBuilders.update('users', req.body, conditions);
		conn.query(sql, value, function(err, results, fields) {
			if(err) console.log(err);
			response.ok(results,res);
		})
	},

	delete : function(req, res) {
		var conditions = {"id" : req.params.id};
		var [sql, value] = queryBuilders.hardDelete('users', conditions);

		conn.query(sql, value, function(err, results, fields) {
			response.ok(results, res);
		})
	},

	randomfox : async function(req, res) {
		var floof = await axios.get('https://randomfox.ca/floof/');
		var getImage = await axios({
	  			method:'get',
	  			url:floof.data.image,
	  			responseType:'stream'
				});
		const pathImage 	= path.resolve(__dirname, '../images', Date.now()+'.jpg');
		getImage.data.pipe(fs.createWriteStream(pathImage)).on('finish', function () {
			response.ok(["image save"], res);
		});
  },
}
