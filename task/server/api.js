var express = require('express');

var mongoose = require('mongoose');
var cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const jwt_Secret = "qwertyuiop;lkjhgfdsazxcvbnm1234567890@"

app = express()


port =8080

url ="mongodb+srv://data:test1234@cluster1.3gbrs9r.mongodb.net/data?retryWrites=true&w=majority"

mongoose.connect(url,(err)=>{
    if (err) throw err;
    console.log("connected")
})

const schema = mongoose.Schema({
    fname : {type : String},
    lname : {type : String},
    username: {type : String},
    email : {type:String ,unique:true},
    password :{type:String}
})

const Userdata = mongoose.model('Userdata',schema)


app.use(express.json())
app.use(cors())


app.get('/',(req,res)=>{
    res.send("Hello world")
})



app.post('/save',(req,res)=>{

    const {fname,lname,username,email,password} = req.body;
    try{
        const oldUser = Userdata.findOne({email});
        if(!oldUser){
            console.log("already existed")
            res.json({status:500 ,error:"alredy exits"})

        }
        else{Userdata.create({
            fname,
            lname,
            username,
            email,
            password,
        });}
        console.log("updated to database")
        res.send({ status:"ok"})

        

    }catch(err){
        console.log("already exits")
        res.send({status:500 , error:"error"})
    }
    

 
    
    
    
    

    
})

app.post('/login', async(req,res)=>{
    const {email,password} = req.body;  
    console.log(req.body);
    
    const user = await Userdata.findOne({ email });
    
    console.log(user)
    if (!user){
        return res.json({ error:'User Not Found'})
    }
    else{
        console.log(" user found")
        res.send({ status:"ok"  })
        
    }

})


app.listen(port,()=>{
    console.log("server started")
})