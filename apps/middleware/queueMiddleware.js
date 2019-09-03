const {check} = require('express-validator')

exports.validate = (method) => {
  switch (method) {
  	case "create-queue":
				return [
					check("client_id")
						.exists().withMessage("client_id diperlukan"),
					check("current_queue")
						.exists().withMessage("Antrian saat ini diperlukan"),
					check("max_queue")
						.exists().withMessage("Antrian maksimal diperlukan!")
				];
		default:
    	break;
    }
}