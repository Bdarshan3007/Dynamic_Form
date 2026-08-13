import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'

const Values = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const schema = Yup.object({
  name: Yup.string().min(2).max(100).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(4).max(12).required(),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required()
})
function CreateAccount() {
  const Navigate = useNavigate();
  const [signupError, setSignupError] = useState('');

  const { values, errors, handleChange, handleSubmit, touched, handleBlur } = useFormik({
    initialValues: Values,
    validationSchema: schema,

    onSubmit: (values) => {
      console.log("Form Submitted", values)
      setSignupError('');

      const userData = JSON.parse(
        localStorage.getItem('userData')
      ) || [];

      const existingUser = userData.find(
        (user) => user.email === values.email
      );

      if (existingUser) {
        console.log("User already exists");
        setSignupError("An account with this email already exists!");
        return;
      }

      userData.push(values);
      localStorage.setItem('userData', JSON.stringify(userData));
      console.log("Account created successfully");

      Navigate("/login");
    }

  })
  return (
    <div className="auth-page">
      <div className="brand-container">
        <div className="brand-logo">DK</div>
        <span className="brand-name">Darshan's Auth</span>
      </div>

      <div className="auth-card">
        <div className="auth-header">
          <h2 className="auth-title">Create your account</h2>
          <p className="auth-subtitle">Enter your details below to get started</p>
        </div>

        {signupError && (
          <div className="auth-alert-error">
            <span>{signupError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor='name' className="form-label">Full Name</label>
            <input type="text"
              id="name"
              name="name"
              placeholder="Enter Full Name"
              className={`form-input ${errors.name && touched.name ? 'input-error' : ''}`}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? <span className="error">{errors.name}</span> : null}
          </div>

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
            {errors.email && touched.email ? <span className="error">{errors.email}</span> : null}
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
            {errors.password && touched.password ? <span className="error">{errors.password}</span> : null}
          </div>

          <div className="form-group">
            <label htmlFor='confirmPassword' className="form-label">Confirm Password</label>
            <input type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="••••••••"
              className={`form-input ${errors.confirmPassword && touched.confirmPassword ? 'input-error' : ''}`}
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirmPassword && touched.confirmPassword ? <span className="error">{errors.confirmPassword}</span> : null}
          </div>

          <div className="form-group">
            <button type="submit" className="btn-submit">
              Create Account
            </button>
          </div>
        </form>

        <div className="auth-footer">
          <span>Already have an account?</span>
          <Link to="/login" className="auth-link">Sign in</Link>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount



