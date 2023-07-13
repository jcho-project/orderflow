import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Register() {
  const registerSubmit = (e) => {
    const navigate = useNavigate();

    e.preventDefault();
    console.log('register request has been made');
    console.log(e.target.reguname.value);
    console.log(e.target.regpass.value);

    createUserWithEmailAndPassword(auth, e.target.reguname.value, e.target.regpass.value)
      .then((userCredential) => {
        // Signed In
        const user = userCredential.user
        navigate("/")
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
      })
  };

  return (
    <form onSubmit={registerSubmit}>
      <div className="input-container">
        {/* {renderErrorMessage("nouser")} */}
        <label>Username </label>
        <input type="text" name="reguname" required />
        {/* {renderErrorMessage("uname")} */}
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="regpass" required />
        {/* {renderErrorMessage("pass")} */}
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Register;
