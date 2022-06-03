const{getMedicineData} = require('./model/searchMedicineModel');



/**
 * unit test
 */
test('Should output Medicine', async () => {
    const data = await getMedicineData("Napa");
    expect(data).toEqual([{"med_name": "Napa", "generic_name" : "Paracetamol",
    "med_id": 1, "alternative_brands": "Ace, Atopen", "side_effects" : "mild"}]);
});