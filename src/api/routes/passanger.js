const base_controller = require('../controllers/base');
const passanger_service = require('../../services/Passanger')

const { isUserVerified } = require('../../middleware');

module.exports = (router) => {
    router.post('/passanger/board', isUserVerified, base_controller.wrap_with_store(passanger_service.board));
};