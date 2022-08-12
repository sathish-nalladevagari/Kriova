var mongoose = require('mongoose')
var model = require('./model');



url = "mongodb://localhost:27017/firstmon";

//firstmon is local database name

const content = [
    {EmployeeId:1,EmployeeName:"rahul", Email:"hello@gmail.com",PhoneNumber:1234,Street:"ring road",city:"somecity",State:"telangana",Country:"india",},
    {EmployeeId:1,EmployeeName:"kiran", Email:"kiran@gmail.com",PhoneNumber:1234,Street:"ring road",city:"madanapalli",State:"ap",Country:"india",},
    {EmployeeId:1,EmployeeName:"pooja", Email:"pooja@gmail.com",PhoneNumber:1234,Street:"jonnachenuvaripalli",city:"madanapalli",State:"ap",Country:"india",},
    {EmployeeId:1,EmployeeName:"manoj", Email:"manoj@gmail.com",PhoneNumber:1234,Street:"ring road",city:"madanapalli",State:"ap",Country:"india",},
    {EmployeeId:1,EmployeeName:"gowtham", Email:"gowtham@gmail.com",PhoneNumber:1234,Street:"vizag",city:"madanapalli",State:"ap",Country:"india",},
    {EmployeeId:1,EmployeeName:"uday", Email:"uday@gmail.com",PhoneNumber:1234,Street:"ring road",city:"madanapalli",State:"ap",Country:"india",},
    {EmployeeId:1,EmployeeName:"prem", Email:"prem@gmail.com",PhoneNumber:1234,Street:"ring road",city:"madanapalli",State:"ap",Country:"india",},
    {EmployeeId:1,EmployeeName:"sathish", Email:"sathish@gmail.com",PhoneNumber:1234,Street:"ring road",city:"madanapalli",State:"ap",Country:"india",},
]

mongoose.connect(url,function(err,res){
    if (err) throw err;
    console.log("connection successful")
    model.create(content)
    console.log("content is created in database")
})
