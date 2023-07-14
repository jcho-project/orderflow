import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { auth } from "../config/firebase"

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {email, password } = formData;

  const navigate = useNavigate();

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  async function registerSubmit(e) {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      console.log(user)
      navigate("/")
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  }

  return (
    <form onSubmit={registerSubmit}>
      <div className="input-container">
        {/* {renderErrorMessage("nouser")} */}
        <label>Username </label>
        <input type="email" label="Email Address" value={email} onChange={onChange} name="email" required />
        {/* {renderErrorMessage("uname")} */}
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" label="Create Password" value={password} onChange={onChange} name="password" required />
        {/* {renderErrorMessage("pass")} */}
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Register;
