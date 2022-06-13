const db = require('../../../Connections');

module.exports = function CreateLandBuildingLeaseDAL(leaseData) {
  return new Promise((resolve, reject) => {
    db.getConnection()
      .then((conn) => {
        const qry = `
        INSERT INTO lq_testing.land_building_lease (lease_type, address, city, state, country, currency, vendor_name, possession_date, end_date, base_rent, base_rent_frequency)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `;

        const params = [
          leaseData.leaseType.toLowerCase(),
          leaseData.address,
          leaseData.city,
          leaseData.state,
          leaseData.country,
          leaseData.currency.toUpperCase(),
          leaseData.vendorName,
          leaseData.possessionDate,
          leaseData.endDate,
          parseFloat(leaseData.baseRent).toFixed(2),
          leaseData.baseRentFrequency.toLowerCase(),
        ];

        conn.execute(qry, params, (err, results, fields) => {
          conn.end();
          if (err) {
            reject(err);
          }

          resolve({
            message: 'success',
            new_lease_id: results.insertId,
          });
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

/*
INSERT INTO lq_testing.land_building_lease
  (`lease_type`, `address`, `city`, `state`, `country`, `currency`, `vendor_name`, `possession_date`, `end_date`, `base_rent`, `base_rent_frequency`)
VALUES
  ('Land', '45 S Whales Dr', 'Hampton', 'VA', 'United States', 'USD', 'Some Vendor 1', '2021/10/15', '2025/10/01', '1015.25', 'monthly');
*/