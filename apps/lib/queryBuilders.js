module.exports = {
	insert : function(table, datas) {
		
	},

	update : function(table, datas, conditions) {
		var column = [];
		var columnValue = [];

		if(typeof datas == 'object')
		{
			for(var [key, value] of Object.entries(datas))
			{
				column.push(key+"=?");
				columnValue.push(value);
			}
		}

		var where = [];
		if(typeof conditions == 'object')
		{
			for(var [key, value] of Object.entries(conditions))
			{
				where.push(key+"=?");
				columnValue.push(value);
			}
		}

		var sql = "Update "+table+" set "+column.join(", ")+" WHERE "+where.join(" and ");

		return [sql, columnValue];
	},

	delete : function (table, conditions) {
		var is_delete = {'is_delete' : 1}
		return this.update(table, is_delete, conditions);

	},

	hardDelete : function (table, conditions) {
		
	}
}