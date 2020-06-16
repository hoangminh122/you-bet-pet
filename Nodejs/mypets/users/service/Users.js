const models = require("../models/index");

module.exports = {
    createUserService:(data,callBack) =>{
        models.User.create({
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            avatar_id: data.avatar_id,
            username: data.username,
            password: data.password
        })
        .then((user) => {
            return callBack(null,user);
        })
        .catch((error) =>  {
            return callBack(error);
        });
    },
    userLoginService: (email,callBack) =>{
        models.User.findOne({
            where : { email : email },
            // include : {
            //     model : models.User
            // }
        }) 
        .then(user => {
            if (!user) {
                return callBack(null,user);
            }
                return callBack(null,user.dataValues);
        })
        .catch(error => callBack(error));
    }

}
