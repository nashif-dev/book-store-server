const users = require('../models/userMODEL')
const jwt = require('jsonwebtoken')
//register controller
//register api request
exports.registerController = async (req,res)=>{
    console.log('Inside Register');
    const {username,email,password01} = req.body
    console.log(username,email,password01);
    try{
        //check mail in model
        const existingUser = await users.findOne({email})
        if(existingUser){
            return res.status(409).json("User already exists!!! Please Login...")
        }else{
            const newUser = new users ({
                username,email,password01
            })
            await newUser.save()
            return res.status(201).json(newUser)
        }

    }catch(err){
        console.log(err);
        return res.status(500).json(err)
    }
}

//  login controller
exports.loginController = async (req,res)=>{
    console.log('Inside login controller');
    const {email,password01} = req.body
    // console.log(email,password);
    try{
        //check mail in model
        const existingUser = await users.findOne({email})
        if(existingUser){
            if(password01 === existingUser.password01){
                const token = jwt.sign({UserMail:existingUser.email,Role:existingUser.role},process.env.JWTSECRET)
                res.status(200).json({user:existingUser,token})
            }else{
                res.status(401).json("Incorrect email or password")
            }
        }else{
          res.status(404).json("Account does not exist!!!")
        }

    }catch(err){
        console.log(err);
        return res.status(500).json(err)
    }
}

//  google login controller
exports.googleLoginController = async (req,res)=>{
    console.log('Inside googleLoginController');
    const {email,password01,username,profilepic} = req.body
    // console.log(email,password01,username,profilepic);
    try{
        //check mail in model
        const existingUser = await users.findOne({email})
        if(existingUser){
            //login
            //generate token
             const token = jwt.sign({UserMail:existingUser.email,Role:existingUser.role},process.env.JWTSECRET)
            res.status(200).json({user:existingUser,token})
        }else{
            //register
            const newUser = await users.create({
                username,email,password01
            })
             const token = jwt.sign({UserMail:newUser.email,Role:newUser.role},process.env.JWTSECRET)
             res.status(200).json({user:newUser,token})
          res.status(404).json("Account does not exist!!!")
        }

    }catch(err){
        console.log(err);
        return res.status(500).json(err)
    }
}