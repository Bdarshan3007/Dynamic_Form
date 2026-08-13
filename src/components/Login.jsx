import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'

const Values = {
  email:'',
  password:'',
}

const schema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(4).max(12).required()
})
function Login() {
const Navigate = useNavigate();
  const [loginError, setLoginError] = useState('');

  const {values,errors,handleChange,handleSubmit,touched,handleBlur}=useFormik({
    initialValues:Values,
    validationSchema:schema,

    onSubmit:(values)=>{
      console.log("Form Submitted",values)
      setLoginError('');
    
      const userData = JSON.parse(localStorage.getItem('userData'))||[];

      const user = userData.find((user) => 
        user.email === values.email && user.password === values.password);

      if(user){
        localStorage.setItem("loggedUser",JSON.stringify(user));
        console.log("Login successful");
        Navigate("/dashboard");
      }
      else{
        console.log("Invalid email or password");
        setLoginError("Invalid email or password. Please try again.");
      }
    }
    

  });

  
  return (
    <div className="auth-page">
      <div className="brand-container">
        <div className="brand-logo">DK</div>
        <span className="brand-name">Darshan's Auth</span>
      </div>

      <div className="auth-card">
        <div className="auth-header">
          <h2 className="auth-title">Sign in to your account</h2>
          <p className="auth-subtitle">Enter your credentials below to continue</p>
        </div>

        {loginError && (
          <div className="auth-alert-error">
            <span>{loginError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor='email' className="form-label">Email</label>
            <input type="email"
              id="email"
              name="email"
              placeholder="name@example.com"
              className={`form-input ${errors.email && touched.email ? 'input-error' : ''}`}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? <span className="error">{errors.email}</span> : null } 
          </div>

          <div className="form-group">
            <label htmlFor='password' className="form-label">Password</label>
            <input type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              className={`form-input ${errors.password && touched.password ? 'input-error' : ''}`}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? <span className="error">{errors.password}</span> : null } 
          </div>

          <div className="form-group">
            <button type="submit" className="btn-submit">
              Sign In
            </button>
          </div>
        </form>

        <div className="auth-footer">
          <span>Don't have an account?</span>
          <Link to="/create-account" className="auth-link">Create account</Link>
        </div>
      </div>
    </div>
  )
}

export default Login



