const {check} = require('express-validator')

exports.validate = (method) => {
  switch (method) {
  	case "create-client":
				return [
					check("name")
						.exists().withMessage("Nama diperlukan"),
					check("address")
						.exists().withMessage("Alamat saat ini diperlukan"),
				];
    
		default:
    	break;
    }
}