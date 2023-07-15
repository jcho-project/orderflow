import { useContext } from 'react';
import { useState } from 'react';
import OrderContext from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';
import { auth } from "../config/firebase"
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"

function Login() {
  const { renderErrorMessage, handleLoginSubmit } = useContext(OrderContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState({});
  const { email, password } = formData;

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });
  
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
  
  async function handleLogin(e) {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      console.log(user)
      navigate("/")
    } catch(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  }

  return (
    <form onSubmit={handleLogin}>
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
