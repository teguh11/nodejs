module.exports = {
	message : '',
	email : function (email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
	},

	integerOnly : function(integer) {
		return /^\d*$/.test(integer);
	},

	stringOnly : function(string) {
		return /^[A-Za-z\s]*$/.test(string);
	}
}