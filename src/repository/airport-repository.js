const CrudRespository = require('./crud-repository');
const { Airpot } = require('../models/index');
class AirportRespository extends CrudRespository {
    constructor() {
        super(Airpot);
    }
}

module.exports = AirportRespository;