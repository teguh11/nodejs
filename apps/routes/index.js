const userRoutes = require('./user_routes');
const queueRoutes = require('./queue_routes');
const clientRoutes = require('./client_routes');
const otherRoutes = require('./other_routes');

module.exports = function (app, db) {
	userRoutes(app, db);
	queueRoutes(app, db);
	clientRoutes(app, db);
	otherRoutes(app, db);
}