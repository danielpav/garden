var controller = require('./controller.js');

module.exports = function(app){
  app.route('/api/features')
    .get(controller.features)
    .post(controller.feature);

  app.route('/api/measurements')
    .get(controller.measurements)
    .post(controller.measure)


}
