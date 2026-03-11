// Import Controllers..
const SodaController = require('../controllers/soda_controller');
const DinerController = require('../controllers/diner_controller');

module.exports = route => {
// Soda Controller Routes..
  route.post('/sodas', SodaController.createSoda);
  route.get('/sodas', SodaController.findAllSodas);
  route.get('/soda/:_id', SodaController.getSodaInfo);
  route.put('/soda/updateSoda/:_id', SodaController.updateServing);
  route.put('/soda/:_id', SodaController.editSoda);
  route.delete('/soda/:_id', SodaController.deleteSoda);

// Diner Controller Routes..
  route.post('/diner', DinerController.createDiner);
  route.get('/diners', DinerController.findDiners);
  route.get('/diner/:_id', DinerController.getDinerInfo);
  route.get('/diner/:_id/sodas', DinerController.findSodasForDiner);
  route.get('/sodas/serving', DinerController.sodasToServe);
  route.put('/diner/:_id', DinerController.editDiner);
  route.put('/diner/:_id/sodas', DinerController.addSodasToDiner);
  route.delete('/diner/:_id', DinerController.deleteDiner);
};