const {Model, Datatype, DataTypes}=require('sequelize');
const sequelize= require('../connection');

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