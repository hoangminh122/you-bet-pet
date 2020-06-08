const {verify} = require('../controller/Users');
//usually : "Authorixation :Bearer[token]"

module.exports = (req,res,next) => {
    let tokenToVerify;
    if(req.header('Authorization')){
        const parts = req.header('Authorization').split(' ');
        if(parts.length === 2){
            const scheme = parts[0];                   // Bearer
            const credentials = parts[1];                // value Bearer->token
            // if (/^Bearer$/.test(scheme)) {
            //     tokenToVerify = credentials;        //help!
            if(scheme === "Bearer"){
                tokenToVerify = credentials;
            } else {
                return res.status(401).json({
                    msg: "Format for Authorization: Bearer[token]"
                });
            }
        } else {
            return res.status(401).json({
                msg: "Format for Authorization:Bearer [token]"
            });
        } 
    } else if(req.body.token){
        tokenToVerify = req.body.token;
    } else {
        return res.status(401).json({
            msg: "Format for Authorization:Bearer [token]"
        });
    }
    if(verify(tokenToVerify,(err,thisToken) => {
        if(err) return res.status(401).json({err});
        req.token = thisToken;                          //help
        return next();
    }));
}