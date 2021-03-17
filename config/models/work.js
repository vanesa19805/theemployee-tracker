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

class role extends model{}

role.init(
{
id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    AutoIcrement:true
},
title:{
    type: DataTypes.STRING
},
//do we need the Pkey our AI also is decimal ok??
salary:{
    type: DataTypes.DECIMAL,
    primaryKey: true,
    AutoIcrement:true
},
department_id:{
    type: DataTypes.INTEGER,
}
}
);
module.exports=role;

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
