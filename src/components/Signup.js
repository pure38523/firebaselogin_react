import React, { useRef, useState } from "react";
import { useAuth } from '../contexts/AuthContext';
import {Link ,useHistory} from 'react-router-dom';


export default function Signup() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const history = useHistory();

  async function handleSubmit(e){
    e.preventDefault()
    if(passwordRef.current.value !== passwordConfirmRef.current.value){
        return setError('Password do not match')
    }

    try{
        setError('')
        setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
        history.push("/")
    } catch{
        setError('Failed to create account')
    }

    setLoading(false)
}

  return (
    <div>
      <div className="register-form" style={{textAlign:"center",alignItems:"center",border:"5px solid black"}}>
        <h3 style={{ fontWeight: "bold", textAlign: "center"}}>
          Sign Up
        </h3>
        {error}
        <form className="form-content2" onSubmit={handleSubmit}>
          <label> Email </label>
          <div>
            <input
              className="textandpassword"
              type="text"
              ref={emailRef}
              placeholder="Email"
              required
            />
          </div>
          <label> Password </label>
          <div>
            <input
              className="textandpassword"
              type="password"
              ref={passwordRef}
              placeholder="Password"
              required
            />
          </div>
          <label> Confirm Password</label>
          <div>
            <input
              className="textandpassword"
              type="password"
              ref={passwordConfirmRef}
              placeholder="Confirm Password"
              required
            />
          </div>
          <div>
            <button disabled={loading}className="signin-upsubmit" type="submit">
              Sign Up
            </button>
            {/* <input className="signin-upsubmit" type="submit" value="Sign Up" required /> */}
          </div>
          <div>
            Already Registered?
            <Link to="/login">
              <a className="login" style={{ textDecoration: "none" }}>
                Sign In
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
