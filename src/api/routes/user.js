const base_controller = require('../controllers/base');
const user_service = require('../../services/User');

const { isUserVerified } = require('../../middleware');

module.exports = (router) => {
    router.get('/sign-up', base_controller.render('user/sign-up', 'Sign up'));
    router.get('/sign-in', base_controller.render('user/sign-in', 'Sign in'));
    router.get('/home', isUserVerified, base_controller.render('user/home', 'Home'));
    router.get('/rides', isUserVerified, base_controller.render('user/rides', 'Rides'));

    router.post('/sign-up', base_controller.wrap(user_service.sign_up));
    router.post('/sign-in', base_controller.wrap(user_service.sign_in));
};