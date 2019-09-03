var clientType = require('./../models/clientTypeModel');


module.exports = function(app, connect) {
  app.get('/client_types', clientType.lists)
  app.get('/client_type/:id', clientType.detail)
}
