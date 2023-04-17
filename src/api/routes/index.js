const user_routes = require('./user');
const driver_routes = require('./driver');
const taxi_routes = require('./taxi');
const trip_routes = require('./trip');
const passanger_routes = require('./passanger');
const base_routes = require('./base');

module.exports = (router) => {
    user_routes(router);
    driver_routes(router);
    taxi_routes(router);
    trip_routes(router);
    passanger_routes(router);
    base_routes(router)
};