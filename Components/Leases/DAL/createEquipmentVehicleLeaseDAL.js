const db = require('./../../../Connections');

module.exports = function CreateVehicleEquipmentLeaseDAL(leaseData) {
  return new Promise((resolve, reject) => {
    resolve({
      message: 'Create new Vehicle Equipment Lease DAL',
    })
  });
};