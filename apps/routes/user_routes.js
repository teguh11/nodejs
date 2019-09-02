var userModel = require('./../models/UserModel');
var userMiddleware = require('./../middleware/userMiddleware');
var response = require('./../lib/response');
const token = require('./../lib/auth/validateToken');
// app.use(token.verifyToken);


module.exports = function(app, connect) {
	app	.get('/user/:id', userModel.detail)

	app.get('/users', function(req, res) {
		userModel.lists(req, res);
	})

	app.post('/user/create', userMiddleware.validate("create-user"), (req, res) => {
		userModel.create(req, res);
	})


}
