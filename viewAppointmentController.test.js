const{getAppointmentData} = require('./model/viewAppointmentModel');



/**
 * unit test
 */
test('should output patient name and appointment date', async () => {
    const data = await getAppointmentData(12);
    expect(data).toBe([{"patient_name": "alvi", 
     "appointment_date": "2020-12-12"}]);
  });