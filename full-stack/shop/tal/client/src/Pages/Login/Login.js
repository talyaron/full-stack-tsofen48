import React from 'react';
import './Login.css';

export const Login = () => {
    return (
        <div className='page login__page'>
           <div className='forms'>
               <form>
                   <label>Login</label>
                   <input type='text' placeholder='User name' name='username' />
                   <input type='password' placeholder='User name' name='password' />
                   <button type='submit'>Login</button>
               </form>
               <form>
                   <label>Register</label>
                   <input type='text' placeholder='User name' name='username' />
                   <input type='text' placeholder='User name' name='password' />
                   <button type='submit'>Register</button>
               </form>
           </div>
        </div>
    )
}
export default Login;