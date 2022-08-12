
var mongoose = require("mongoose");

var tableSchema = mongoose.Schema({
    EmployeeID : { type: Number, },
    EmployeeName: { type: String , required:true},
    Email: { type: String , lowercase:true , required:true},
    DateOfBirth : { type: Date ,default:100 },
    PhoneNumber : { type:Number},
    Street :{ type: String },
    City :{ type : String},
    State :{ type: String},
    Country :{ type : String},
    Pincode :{ type: String,default:100}
})

const model =  mongoose.model('Employee',tableSchema);

module.exports = model;