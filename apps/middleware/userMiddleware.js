const {check} = require('express-validator')

exports.validate = (method) => {
  switch (method) {
  	case "create-user":
				return [
					check("name")
						.exists().withMessage("nama diperlukan"),
					check("email")
						.exists().withMessage("Email diperlukan")
						.isEmail().withMessage("Email tidak valid"),
					check("password")
						.exists().withMessage("Password diperlukan!")
						.isLength({min:6}).withMessage("Password harus lebih dari 5 karakter")
				];
    
		default:
    	break;
    }
}