const user = (sequelize,DataTypes)=>{
    const Users = sequelize.define('users',{
        id:{
            type:DataTypes.INTEGER(4),
            autoIncrement:true,
            primaryKey:true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        email: {
            type: DataTypes.STRING,
            allowNull:false
        },
        avatar_id: {
            type: DataTypes.STRING,
            allowNull:false
        },
        username: {
            type: DataTypes.STRING,
            allowNull:false
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false
        }
    })
    return Users;
}


module.exports= user;

