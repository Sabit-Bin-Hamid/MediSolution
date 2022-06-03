const{getLogininfo1} = require('./model/homeModel');



/**
 * unit test
 */
test('should output login name and password', async () => {
    const data = await getLogininfo1("meem");
    expect(data).toEqual([{"password": "1234", 
    "user_id": 2, "email": "meem@gmail.com"}]);
  });