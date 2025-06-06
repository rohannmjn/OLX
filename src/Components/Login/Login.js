import React from 'react';
import { useState,useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import {FirebaseContext} from '../../store/Context'
import {useNavigate} from 'react-router-dom'
function Login() {
  const [email,SetEmail]=useState('');
  const [password,SetPassword]=useState('');
  const {firebase} = useContext(FirebaseContext)
  const navigate=useNavigate()
  const handleLogin = (e)=>{
  e.preventDefault()
  firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
   navigate('/')
  }).catch((error)=>{
    alert(error.message)
  })

  }
  const handleClick = () => {
    
    navigate('/signup');
  };
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>SetEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>SetPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={handleClick}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
