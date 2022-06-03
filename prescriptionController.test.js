

const { getPrescription } = require('./model/prescriptionModel');
/**
 * unit test
 */
test("Should output patient Name , patient Id, consultation Date and prescription", async () => {
    const data = await getPrescription(123);

    except(data).toEqual([{
        "patient_name": 'Sabit-Bin-Hamid', "patient_id": 123,
        "consultation_date": "2021-09-22", "prescription": "dsfsfdsfdsfdsfdsf"
    }]);
});