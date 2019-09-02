var jwt 				= require('jsonwebtoken');
var config 			= require('./../../config/config');
var response		= require('./../response');


var userAuth = {
	generateToken : function (datas) {
		return jwt.sign(datas, config.jwt.secret_key, {expiresIn : 86400});
	},

	verifyToken : function (req, res, next) {

		var authorization = req.headers.authorization;

		if(typeof authorization != 'undefined')
		{
			var token = authorization.split(" ");
			if(token.length > 0)
			{
				token = token[1];
				try {
					var result = jwt.verify(token, config.jwt.secret_key);
					global.userInfo = result;
					next();
				} catch(err) {
					response.error({message : "Token not match"}, res);
				}
			}
			else
			{
					response.error({message : "Authoization token required"}, res);
			}
		}
		else
		{
			response.error({message : "Authoization token required"}, res);
		}
	}
}

module.exports = userAuth;


