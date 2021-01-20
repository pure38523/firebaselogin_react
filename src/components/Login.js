import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link , useHistory} from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login} = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/")
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div>
      <div
        className="register-form"
        style={{
          textAlign: "center",
          alignItems: "center",
          border: "5px solid black",
        }}
      >
        <h3 style={{ fontWeight: "bold", textAlign: "center" }}>Log In</h3>
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

          <div>
            <button
              disabled={loading}
              className="signin-upsubmit"
              type="submit"
            >
              Log In
            </button>
            {/* <input className="signin-upsubmit" type="submit" value="Sign Up" required /> */}
          </div>
          <div>
            don't have account ?
            <Link to="/signup">
              <a className="login" style={{ textDecoration: "none" }}>
                Create an account
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
