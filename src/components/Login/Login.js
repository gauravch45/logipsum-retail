import React, { useEffect, useState } from "react";
import "./Login.css";

function Login() {
  const [state, newState] = useState(null);

  /*  useEffect(() => {
    console.log(state);
  }, [state]);*/

  const signUpLink = () => {
    newState("signup");
  };

  const signInLink = () => {
    newState("signin");
  };

  return (
    <div className="login" id="login">
      <div className="login-container">
        <div
          className={
            state === "signup"
              ? "wrapper animate-signIn"
              : "wrapper animate-signUp"
          }
        >
          {/* Sign-Up form */}
          <div className="form-wrapper sign-up">
            <form action="">
              <h2>Sign Up</h2>
              <div className="input-group">
                <input type="text" required />
                <label>Username</label>
              </div>
              <div className="input-group">
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className="input-group">
                <input type="password" required />
                <label>Password</label>
              </div>
              <button type="submit" className="btn">
                Sign Up
              </button>
              <div className="sign-link">
                <p>
                  Already have an account?{" "}
                  <a href="#" className="signIn-link" onClick={signInLink}>
                    Sign In
                  </a>
                </p>
              </div>
            </form>
          </div>

          {/* Sign-In form */}
          <div className="form-wrapper sign-in">
            <form action="">
              <h2>Login</h2>
              <div className="input-group">
                <input type="text" required />
                <label>Username</label>
              </div>
              <div className="input-group">
                <input type="password" required />
                <label>Password</label>
              </div>
              <div className="forgot-pass">
                <a href="/">Forgot Password?</a>
              </div>
              <button type="submit" className="btn">
                Login
              </button>
              <div className="sign-link">
                <p>
                  Don't have an account?{" "}
                  <a href="#" className="signUp-link" onClick={signUpLink}>
                    Sign Up
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
