import React, { useState } from 'react';
import database from './FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [login,setLogin] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e,type) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        if(type=="signup")
        {createUserWithEmailAndPassword(database, email, password)
            .then(() => {
                navigate('/home');
            })
            .catch(error => {
                alert(error.code)
                setLogin(true)
            });} 
            else {
                signInWithEmailAndPassword(database, email, password)
                .then(() => {
                    navigate('/home');
                })
                .catch(error => {
                    alert(error.code)
                    setLogin(true)
                });  
            }
    }

    return (
        <div className='login'>
            <div className='log-row'>
                <div className={login == false?'log-activeColor':'log-pointer'} onClick={() => setLogin(false)}>
                    SignUp
                </div>
                <div className={login == true?'log-activeColor':'log-pointer'} onClick={() => setLogin(true)}>
                    SignIn
                </div>
            </div>
            <h1 className='title-login'>{login?"Sign In":"SIgn Up"}</h1>
            <form onSubmit={(e)=>handleSubmit(e, login?'signin':'signup')}>
                <input name='email' placeholder='Email' /><br />
                <input name='password' type='password' placeholder='Password' /><br />
                <button>{login?"Sign In":"Sign Up"}</button>
            </form>
        </div>
    )
}

export default Login;
