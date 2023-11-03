import React from "react";
import { Link } from "react-router-dom";
//import "./login.css";

const Register = () => {
  return (
    <section className="container forms">

      <div className="form signup">
        <div className="form-content">
          <header>Signup</header>
          <form action="#">
            <div className="media-options">
              <a href="#" className="field google">
                <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="" className="google-img" />
                <span>Signup with Google</span>
              </a>
            </div>

            <div className="line"></div>

            <div className="field input-field">
              <input type="email" placeholder="Email" className="input" />
            </div>

            <div className="field input-field">
              <input type="password" placeholder="Create password" className="password" />
            </div>

            <div className="field input-field">
              <input type="password" placeholder="Confirm password" className="password" />
              <i className='bx bx-hide eye-icon'></i>
            </div>

            <div className="field button-field">
              <button>Signup</button>
            </div>
          </form>

          <div className="form-link">
            <span>Already have an account? 
              <Link to="/Login" className="link login-link">Login</Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
