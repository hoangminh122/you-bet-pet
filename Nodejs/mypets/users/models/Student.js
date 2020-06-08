const Student = (sequelize,DataTypes)=>{
    const student = sequelize.define('student',{
        id:{
            type:DataTypes.INTEGER(4),
            autoIncrement:true,
            primaryKey:true
        },
        student_id: {
            type: DataTypes.STRING,
            allowNull:false
        },
        class_id: {
            type: DataTypes.INTEGER(4),
            allowNull:false
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        dod: {
            type: 'TIMESTAMP',
            allowNull:false
        },
        sex: {
            type: DataTypes.STRING,
            allowNull:false
        },
        address: {
            type: DataTypes.STRING,
            allowNull:false
        },
        avatar_id: {
            type: DataTypes.STRING,
            allowNull:false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull:false
        },
    
    })
    
    student.associate = (models) =>{
        student.belongsTo(models.User,{
            foreignKey:'class_id'
        })
    }
    return student;
}


module.exports= Student;

