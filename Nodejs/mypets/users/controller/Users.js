const {createUserService,userLoginService} = require('../service/Users');
const {genSaltSync,hashSync,compareSync} = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    userLoginController: (req,res) =>{
        const body = req.body;
        userLoginService(body.email,(err,results) => {
            const result =compareSync(body.password,results.password);
            if(err){
                return false;
            }
            if(!results){                                                                                                   //helps!
                return res.json({
                    success:0,
                    data:"Invalid email or password"
                });
            }
            if(result){
                const jsontoken = jwt.sign({result:results},process.env.SECRET_KEY,{
                    expiresIn: process.env.EXPIRES_IN
                });
                results.password = undefined;
                // const verify = (token, cb) => jwt.verify(token, secret, {}, cb);
                return res.json({
                    success:1,
                    message:"login successfully",
                    token:jsontoken
                });
            } else{
                return res.json({
                    success:0,
                    data:"Invalid email or password"
                });
            } 
        });
    },
    createUserController: (req,res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password,salt);
        createUserService(body,(err,results) => {
            if(err){
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            });
        });
    },
    verify: (token,callBack) =>{
        jwt.verify(token,process.env.SECRET_KEY,{},callBack);
    }
}
