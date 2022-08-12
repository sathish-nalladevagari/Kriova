import React from 'react';
import Nav from './nav';
import { Link } from 'react-router-dom'




export default function Home(){
    return(
        <>
            <Nav />
            <div className='main'>
                <div className='left'>
                    <div className='left-inner'>
                        <h1 className='main-content'>Welcome to<br/>Kriova</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam molestias impedit eius ipsum tempora vitae praesentium itaque ratione. Sed, perferendis.</p>
                        <button><Link to="/" className='button'>Learn More</Link></button>
                    </div>
                </div>
                <div className='right'>
                    <img  src='./vector2.png' className="vector" alt="jdsfk"/>
                    <img src="./1.svg" alt="jdsfk"/>
                    

                </div>
            </div>
            
        </>
    )

};