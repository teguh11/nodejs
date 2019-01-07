var userModel = require('./../models/UserModel');
var response = require('./../lib/response');
const token = require('./../lib/auth/validateToken');
// app.use(token.verifyToken);


module.exports = function(app, connect) {
	app.get('/users', function(req, res) {
		userModel.lists(req, res);
	})

	app.post('/user/create', (req, res) => {
		userModel.create(req, res);
	})

	app.put('/user/update/:id', userModel.update)
			.delete('/user/delete/:id', userModel.delete)
			.get('/user/:id', token.verifyToken, userModel.detail)
}
