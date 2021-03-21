const Sequelize = require('sequelize');
const inquirer = require('inquirer');
const mysql = require('mysql')

// Enable access to .env variables
require('dotenv').config();


 //creating the mysql connections
const connection = mysql.createConnection({
port: 3306,
user: 'root',
password: Pepe1009,
database: 'work_db',
});
//creating the IF error 
connection.connect((err)=>{
    if (err) throw err;
    runSearch();
});

// use inquire to do the questions 
const runSearch = () =>{
inquirer
.prompt({
    name:'action',
    type:'list',
    message:'What would you like to do?',
    Choices: [
        'View all Employees', 
        'View all Employees by departments',
        'View all employees by manager',
  //do i add the add/remove/update role/ update management here??
            ]
})


.then((answer)=> {
switch (answer.action){
    case 'View all Employees':
    employeeSearch();
    break;
    
    case 'View all Employees by Departments':
     employeeDepartmentSearch();
     break;
     
     case 'View all Employees by manager':
     employeeByManagerSearch();
    break;
//to exit 
    case 'EXIT':
    connection.end();
    break;
//if the input is not part of the .then answer.action  it will be invalid.    
    default:
    console.log(`Opps.. Invalid option: ${answer.action}`);
    break;
}
});
}; 

// now we do the methods for each action
//the first is to ADD DEPARTMENT, ROLES AND EMPLOYEES

