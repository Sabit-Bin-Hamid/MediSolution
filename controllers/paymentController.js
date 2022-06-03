/**
 * including model
 */
const paymentModel = require("../model/paymentModel.js");


/**
 * including helpers
 */
const {Publishable_Key, stripe} = require("../helper/stripe.js");

const {id }= require("../helper/user.js");

/**
 * 
 * @param {object} req -passing req data
 * @param {object} res -passing res data
 */
let showPayForm = async (req, res)=>{

    let ID = id;
    let currentAmount = await paymentModel.getCurrency(ID);
    let pageTitle = "Payment Form";
    let title = "Payment";
    let data = {
        pageTitle,
        title,
        currentAmount
    }
    res.render("paymentform", {data});


}

/**
 * 
 * @param {object} req -passing req data
 * @param {object} res -passing res data
 */
let pay = async (req, res)=>{

    let ID = id;
    let amount = req.body.amount;
    let userInfo =  await paymentModel.getUserInfo(ID);
    // console.log(userInfo)
    let email = userInfo[0].email;
    let name = userInfo[0].name;
    let currentAmount = await paymentModel.getCurrency(ID);

    let pageTitle = "Payment Form";
    let title = "Payment";
    let data = {
        pageTitle,
        title,
        key: Publishable_Key,
        amount,
        email,
        name,
        currentAmount
    }
    res.render("payment", {data});


}
/**
 * 
 * @param {object} req -passing req data
 * @param {object} res -passing res data
 */
let payment = async (req, res) => { 

    let ID = id;
    // console.log(req.body);
    
    let amount = req.body.amount;
    let paidAmount = parseInt(amount, 10);
    let userInfo =  await paymentModel.getUserInfo(ID);
    // let email = req.body.email;
    let name = userInfo[0].name;
    let description = "Topping up currency";

    
    stripe.customers.create({ 
        email: req.body.stripeEmail, 
        source: req.body.stripeToken, 
        name, 
         
    }) 
    .then((customer) => { 

        // console.log("The customer id is " + customer.id);
        return stripe.charges.create({ 
            amount: amount * 100,     
            description, 
            currency: 'USD', 
            customer: customer.id 
            
        }); 
    }) 
   
    .then( async (charge) => { 
        // console.log("The charge is ");
        // console.log(charge);
        // res.send("Success") // If no error occurs
        let currentAmount = await paymentModel.getCurrency(ID);
        let totalAmount = currentAmount + paidAmount;
        // console.log(totalAmount);
        await  paymentModel.updateCurrency(ID, totalAmount);
        res.redirect("/payform")
    }) 
    .catch((err) => { 
        res.send(err)    // If some error occurs 
    }); 
}
/**
 * exports module
 */
module.exports = {
    showPayForm,
    pay,
    payment,
}