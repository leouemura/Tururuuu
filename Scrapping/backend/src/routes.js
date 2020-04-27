const express = require ('express');
//const PapelController = require('./controllers/PapelController');
const arrayPapelController = require('./controllers/arrayPapelController');

const routes = express.Router();

routes.post('/papel', arrayPapelController.create);
routes.get('/papel', arrayPapelController.index);
routes.delete('/papel/:papel', arrayPapelController.delete);


module.exports = routes;