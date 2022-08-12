import axios from 'axios';
import React, { useState } from 'react';

import Nav from './nav';

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    function login(e){
        e.preventDefault();
        console.log("login check")
        var loginData = {
            email,
            password,
        }
        axios({
            url:"http://localhost:8080/login",
            method:"POST",
            data:loginData,

        })
        alert("Login successful")

        
        .then((body)=>{
            if(body.status=="ok"){
                alert("Login successful")
            }

        })
        
        
    }
    return ( 
        <>
        <Nav />
        <div className='login-container'>
            <div className='login-content'>
                <h1>Just one step Ahead..</h1>
                <p>Login here and explore</p>
            </div>
        <div className='login-right'>
            <form onSubmit={login}>
            <h1>Login here</h1>
                <label>Email</label><br/>
                <input type="email" name="username" value={email}  onChange={(e)=>{
                    setEmail(e.target.value)
                }} /><br/>
                <label>Password</label><br/>
                <input type="password" name="password" onChange={(e)=>{
                    setPassword(e.target.value)
                }} value={password}  /><br/>
                <button className='login-btn' type="submit">Login</button>
            </form>
        </div>
        <img  src='./vector2.png' className="vector" alt="jdsfk"/>

        </div>

        </>
     );
}
 
export default Login;