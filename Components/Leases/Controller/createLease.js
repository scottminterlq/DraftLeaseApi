const schema = require('./../Schemas').createLeaseSchema;
const DAL = require('./../DAL');

module.exports = function CreateLease(leaseReqs) {
  return new Promise((resolve, reject) => {
    // validate against JOI schema
    const { error, value } = schema.validate(leaseReqs);
    if (error) {
      reject(error.details[0].message);
    }

    let dataProm = {};
    if (value.leaseType.toLowerCase() === 'land' || value.leaseType.toLowerCase() === 'building') {
      console.log('create Land/Building lease');
      dataProm = CreateLandBuildingLease(value);
    } else if (value.leaseType.toLowerCase() === 'vehicle' || value.leaseType.toLowerCase() === 'equipment') {
      console.log('create equip vehicle lease');
      dataProm = createEquipmentVehicleLease(value);
    }

    dataProm
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function CreateLandBuildingLease(leaseReq) {
  return new Promise((resolve, reject) => {
    DAL.createLandBuildingLease(leaseReq)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function createEquipmentVehicleLease(leaseReq) {
  return new Promise((resolve, reject) => {
    DAL.createEquipmentVehicleLease(leaseReq)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}