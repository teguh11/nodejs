var queueModel = require('./../models/QueueModel');
var queueMiddleware = require('./../middleware/queueMiddleware');


module.exports = function(app, connect) {
	app	.get('/queue/:id', queueModel.detail)

	app.get('/queues', function(req, res) {
		queueModel.lists(req, res);
	})

	app.post('/queue/create', queueMiddleware.validate("create-queue"), (req, res) => {
		queueModel.create(req, res);
	})


}
