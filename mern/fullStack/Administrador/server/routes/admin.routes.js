
const PersonController = require('../controllers/admin.controller');
module.exports = function(app){
    app.get('/api', PersonController.index);
}