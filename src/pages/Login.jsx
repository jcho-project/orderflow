import { useContext } from 'react';
import { useState } from 'react';
import OrderContext from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';
import { auth } from "../config/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

function Login() {
  const { renderErrorMessage, handleLoginSubmit } = useContext(OrderContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();

  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <div className="input-container">
        {renderErrorMessage('nouser')}
        <label>Email</label>
        <input type="email" label="Email Address" value={email} onChange={onChange} name="email" required />
        {renderErrorMessage('uname')}
      </div>
      <div className="input-container">
        <label>Password</label>
        <input type="password" label="Create Password" value={password} onChange={onChange} name="password" required />
        {renderErrorMessage('pass')}
      </div>
      <button type="submit">Login</button>
      <button onClick={handleRegister}>Register</button>
    </form>
  );
}

export default Login;
