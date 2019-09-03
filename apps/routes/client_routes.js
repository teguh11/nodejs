var clientModel = require('./../models/ClientModel');
var clientMiddleware = require('./../middleware/clientMiddleware');


module.exports = function(app, connect) {
	app	.get('/client/:id', clientModel.detail)

	app.get('/clients', function(req, res) {
		clientModel.lists(req, res);
	})

	app.post('/client/create', clientMiddleware.validate("create-client"), (req, res) => {
		clientModel.create(req, res);
	})
}
