import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmTxmVLPLn9MTJkl0j4Q2YpZCsKFJgEF0",
  authDomain: "orderflow-7aaed.firebaseapp.com",
  projectId: "orderflow-7aaed",
  storageBucket: "orderflow-7aaed.appspot.com",
  messagingSenderId: "730677271573",
  appId: "1:730677271573:web:463a99a8d06e936f40c21c",
  measurementId: "G-BMTFE4TKDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function Register() {
  const registerSubmit = (e) => {
    e.preventDefault();
    console.log('register request has been made');
    console.log(e.target.reguname.value);
    console.log(e.target.regpass.value);
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
