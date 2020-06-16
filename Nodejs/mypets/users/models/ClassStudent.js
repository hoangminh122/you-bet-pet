const ClassStudent = (sequelize,DataTypes)=>{
    const classStudent = sequelize.define('class',{
        id:{
            type:DataTypes.INTEGER(4),
            autoIncrement:true,
            primaryKey:true
        },
        code: {
            type: DataTypes.STRING,
            allowNull:false
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull:false
        },
    
    })
    // classStudent.associate = (models) =>{
    //     classStudent.hasMany(models.Student)
    // }
    return classStudent;
}

module.exports= ClassStudent;

