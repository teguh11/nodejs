module.exports = {
	ok : function(rows, res) {
		var data = {
			'status' : 200,
			'data'	: rows
		}

		res.json(data);
		res.end();
	},
	error : function(rows, res) {
		var data = {
			'status' : 500,
			'data'	: rows
		}

		res.json(data);
		res.end();
	}

}