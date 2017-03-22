const Equipment = require('../../models/equipment_types');

module.exports.getAllEquipmentTypes = function(req, res, next) {
    Equipment.fetchAll()
        .then((equipmentList) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(equipmentList));
        });
};


module.exports.getEquipmentById = function(req, res, next) {
    Equipment.where('id', req.swagger.params.id.value).fetch()
        .then((equipment) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(equipment));
        });
}
