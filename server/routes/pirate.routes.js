const PirateController = require('../controllers/pirate.controller');

module.exports = app => {
    app.get('/api/pirates', PirateController.getAllPirates);
    app.get('/api/pirates/:id', PirateController.getOnePirate);
    app.post('/api/pirates/new', PirateController.createPirate);
    app.put('/api/pirates/:id', PirateController.updatePirate);
    app.delete('/api/pirates/:id', PirateController.deletePirate);
}