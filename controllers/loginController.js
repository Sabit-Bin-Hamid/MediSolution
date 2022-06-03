const homeModel = require("../model/homeModel.js");
/**
 * 
 * @param {object} req - passing req datas
 * @param {object} res - passing res datas
 */
 let login = async (req,res)=>{
    
    //let searchQuery1 = req.body.email;
    //let loginresult1 = await homeModel.getLogininfo(searchQuery1);
    //let searchQuery2 = req.body.password;
    //let loginresult2 = await homeModel.getLogininfo(searchQuery2);
    let pageTitle = "login";
    let data = {
        
        pageTitle,
        //loginresult1,
        //loginresult2
    }
    res.render("login.ejs",{data});
}

//authenticate as user
let authenticate1 = async (req,res)=>{
    
    let searchQuery1 = req.body.email;
    let loginresult1 = await homeModel.getLogininfo1(searchQuery1);
    let searchQuery2 = req.body.password;
    let loginresult2 = await homeModel.getLogininfo1(searchQuery2);
    let pageTitle = "login";
    
    res.redirect("/home");
}

//authenticate as doctor
let authenticate2 = async (req,res)=>{
    
    let searchQuery1 = req.body.email;
    let loginresult1 = await homeModel.getLogininfo2(searchQuery1);
    let searchQuery2 = req.body.password;
    let loginresult2 = await homeModel.getLogininfo2(searchQuery2);
    let pageTitle = "login_as_doctor";
    
    res.redirect("/homedoc");
}

let logout = async (req,res)=>{
    
    //req.session.destroy;

    res.redirect("/login");
}



module.exports = {
    login : login,
    authenticate1,
    authenticate2,
    logout
}