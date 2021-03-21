// THIS IS TO MAKE THE TABLE 
const {Model, Datatype, DataTypes}=require('sequelize');
const sequelize= require('../connection');

class department extends model{}


// for all 3 tabels?
department.init(
{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        AutoIcrement:true
    },
    names:{
        type: DataTypes.STRING
    }
},
{
    //do we need time stamps? and underscore?
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'work'
}
);
module.exports=department;

