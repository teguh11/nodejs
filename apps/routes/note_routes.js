module.exports = function (app, db) {
	app.get('/index', (req, res) => {
		res.send('Hello');
	})	
}