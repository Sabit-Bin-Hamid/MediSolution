/**
 * importing model
 */
const{getHospitalData} = require('./model/searchHospitalModel');



/**
 * unit test
 */
test('should output Hospital name and adress', async () => {
    const data = await getHospitalData("Labaid");
    expect(data).toEqual([{"address": "House- -1 and, 6 Road No 4, Dhaka 1205", 
    "hospital_id": 2, "name": "LABAID Specialized Hospital"}]);
  });
