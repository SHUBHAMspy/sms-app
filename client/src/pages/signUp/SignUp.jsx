import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/common/input/Input';
import alertContext from '../../context/alert/alertContext';
import authContext from '../../context/auth/authContext';

import './style.css';

const SignUp = () => {
  const { register, error, loading,clearErrors, isAuthenticated } = useContext(authContext);;
  const { setAlert } = useContext(alertContext);;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    // confirmPassword: "",
    
  });

  useEffect(() => {
    if(isAuthenticated){
      navigate('/')
    }
    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    
  }, [error,isAuthenticated,navigate])
  
  if(error) console.log(JSON.stringify(error, null, 2));
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    register(formData)
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="signup">
        {error && <div className='error-card'>{error.message}</div>}
        <form onSubmit={handleSubmit}>
          <h1 className='signup-heading'>SignUp</h1>
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              value={formData[input.name]}
              onChange={onChange}
            />
          ))}
          <button className='signup-button'>{loading ? 'Signing you ...':'Signup' }</button>
          <Link className='login-signupLink' to={'/login'}>Already a user? Login</Link>
        
        </form>
      </div>
      
    </>
  )
}

export default SignUp