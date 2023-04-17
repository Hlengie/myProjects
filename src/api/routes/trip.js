const base_controller = require('../controllers/base');
const trip_service = require('../../services/Trip');

module.exports = (router) => {
    router.post('/trip/add', base_controller.wrap_with_store(trip_service.add));
    router.post('/trip/get/latest', base_controller.wrap_with_store(trip_service.getLatest));
    router.post('/trip/search/addresses', base_controller.wrap_with_store(trip_service.searchByAddresses));
};