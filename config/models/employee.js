const {Model, Datatype, DataTypes}=require('sequelize');
const sequelize= require('../connection');

class employee extends model{}

employee.init(
{
id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    AutoIcrement:true
},
first_name:{
    type: DataTypes.STRING,
},
last_name:{
    type: DataTypes.STRING
},
role_id:{
    type: DataTypes.INTEGER
},
manager_id:{
    type: DataTypes.INTEGER
}
}
);

module.exports= employee;
