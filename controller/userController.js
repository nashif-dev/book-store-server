//register api request
exports.registerController= (req,res)=>{
    console.log("inside registerController");
    const {username,email,password01}=req.body
    console.log(username,email,password01);
    res.status(200).json("request received")
}
//login api
//editUser api
//editAdmin api