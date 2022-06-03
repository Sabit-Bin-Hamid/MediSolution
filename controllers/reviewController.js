//getting model
const basicmodel = require('../model/reviewModel.js');

/**
 * 
 * @param {object} req -- passing req datas
 * @param {object} res -- passing res datas
 */
let Review = (req,res) =>{
    
    let pageTitle= "Review";
    let data = {pageTitle};
    res.render("Review.ejs", {data});
}
let viewReview = async (req, res) => {
    let Name = req.body.Name;
    let Email = req.body.Email;
    let Review = req.body.Review;
    let pageTitle= "viewReview";
    let viewReview = await  basicmodel.getLines(Name,Email,Review);
    let data = {pageTitle,
    viewReview
    };

   
    res.render("viewReview.ejs",{data});



};



let Insertinfo = async (req,res) =>{

    let Name = req.body.Name;
    let Email = req.body.Email;
    let Review = req.body.Review;
    let pageTitle= "Review";
    let data = {pageTitle};
    await  basicmodel.insertReview(Name,Email,Review);
    res.render("Review.ejs",{data,Name,Email,Review});
}

module.exports = {

    Review : Review,
    Insertinfo : Insertinfo,
    viewReview :viewReview

}
