const express = require ('express');
//const PapelController = require('./controllers/PapelController');
const arrayPapelController = require('./controllers/arrayPapelController');
const arrayInvestingPapelController = require('./controllers/arrayInvestingPapelController');

const routes = express.Router();

routes.post('/papel', arrayPapelController.create);
routes.put('/papel', arrayPapelController.update);
routes.get('/papel', arrayPapelController.index);
routes.delete('/papel/:papel', arrayPapelController.delete);

routes.post('/investingpapel', arrayInvestingPapelController.create);
routes.put('/investingpapel', arrayInvestingPapelController.update);
routes.get('/investingpapel', arrayInvestingPapelController.index);
routes.delete('/investingpapel/:investingpapel', arrayInvestingPapelController.delete);


module.exports = routes;