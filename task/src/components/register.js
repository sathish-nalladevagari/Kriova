import React, { useState } from 'react';
import Nav from './nav';
import axios from 'axios';
import { Link } from 'react-router-dom'


function Register (){
    
    const [fname,setFname] = useState('')
    const [lname,setLname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [Username,setUsername] = useState('')


    function submitform(e){
        e.preventDefault();
        console.log(fname,lname,Username,email,password);
        setFname('')
        setLname('')
        setPassword('')
        setUsername('')
        setEmail('')
        var payload = {
            fname,lname,Username,email,password
        }
        console.log(payload)
        
        

        axios({
            url:"http://localhost:8080/save",
            method:"POST",
            data:payload,
        })
        alert("registration successful")
        
        .then((body)=>{
            console.log(body)
            if(body.status ==="ok"){
                alert("register successful")
            }
            if(body.status===500){
                alert("not successful")
            }

        })
        
        

      

    }
    return(
    <div className='register'>
        <Nav />
        <div className='register-container'>
            <div className='left-register'>
                <div className='register-content'>
                    <h1>
                        Join with us <br/>
                        by Registering
                    </h1>
                    <p>A lot of people joined with us so, you <br/>
                    Should Join us Too</p>
                </div>
            </div>
        <div className='right-register'>
        <form onSubmit={submitform}>
            
            <h1>Register Here</h1><br/>
            <label>First Name</label><br/>
            <input type="text" name="firstnamr" value={fname} onChange={(e)=>{
                setFname(e.target.value)
            }} /><br/>
            <label>Last Name</label><br/>
            <input type="text" name="lastname" value={lname} onChange={(e)=>{
                setLname(e.target.value)
            }} /><br/>
            <label>Username</label><br/>
            <input type="text" name="username" value={Username} onChange={(e)=>{
                setUsername(e.target.value)
            }} /><br/>
            <label>Email</label><br/>
            <input type="email" name="email" value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }} /><br/>
            <label>Password</label><br/>
            <input type="password" name="password" value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }} /><br/>
            <button className='register-button' type="submit">Sign Up</button><br/>
            <p>Already Registered???</p>
            <button className='register-login-btn'><Link to="/login">Login Here</Link></button>
        </form>

        </div>
        <img  src='./vector2.png' className="vector" alt="jdsfk"/>
        </div>
    </div>

    )

}; 
 
export default Register;