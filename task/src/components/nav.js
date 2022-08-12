
import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <div className='outer'>
                <div className='inner'>
                    <Link className="link" to="/login">Login</Link>
                    <Link to="/"><h1 className='h1'>Kriova</h1></Link>
                    <Link className="link" to="/register">Register</Link>
                </div>
            </div>
  );
}

export default Nav;